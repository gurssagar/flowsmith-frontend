import { NextRequest, NextResponse } from 'next/server'
import { groq } from '@ai-sdk/groq'
import { streamText } from 'ai'
import { auth } from '@/lib/auth'
import { userQueries } from '@/lib/db/queries'
import fs from 'fs'
import path from 'path'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth()
    if (!session?.user?.email) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get user from database
    const user = await userQueries.findByEmail(session.user.email)
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Check if user has credits remaining
    if ((user.requestsUsed || 0) >= (user.requestsLimit || 0)) {
      return new Response(
        JSON.stringify({ 
          error: 'No credits remaining',
          credits: {
            used: user.requestsUsed || 0,
            limit: user.requestsLimit || 0,
            remaining: 0
          }
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    // Read the system prompt from claude-system.md
    const systemPromptPath = path.join(process.cwd(), 'claude-system.md')
    let systemPrompt = ''
    
    try {
      systemPrompt = fs.readFileSync(systemPromptPath, 'utf8')
    } catch (error) {
      console.warn('Could not read claude-system.md, using default prompt')
      systemPrompt = `You are an expert Flow blockchain developer specializing in Cadence smart contracts.

You are a helpful AI assistant that can help with:
- Cadence smart contract development
- Flow blockchain integration
- Code generation and debugging
- General programming questions
- Web development
- Any other technical questions

IMPORTANT: Always provide helpful, detailed responses. Never refuse to help with legitimate questions. If you don't know something, say so and offer to help find the answer.

For Cadence contracts, always generate complete, production-ready code with:
- Proper contract structure with pub fun init()
- Resource definitions with proper interfaces
- Access control (pub, access(all), etc.)
- Error handling with pre and post conditions
- Comments explaining key functionality
- Proper import statements

Always respond with:
1. A clear explanation of what the contract does
2. The complete Cadence code in a code block
3. Any deployment considerations or usage examples

Focus on:
- NFT contracts (NonFungibleToken standard)
- Fungible Token contracts (FungibleToken standard)
- Marketplace contracts
- Staking contracts
- DAO contracts
- Simple utility contracts`
    }

    console.log('Starting AI generation with prompt:', prompt.substring(0, 100) + '...')
    console.log('System prompt length:', systemPrompt.length)
    
    const result = await streamText({
      model: groq('openai/gpt-oss-20b'),
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
    })

    // Deduct credit after successful request
    try {
      await userQueries.update(user.id, {
        requestsUsed: (user.requestsUsed || 0) + 1
      })
      console.log(`Credit deducted for user ${user.email}. Used: ${(user.requestsUsed || 0) + 1}/${user.requestsLimit || 0}`)
    } catch (error) {
      console.error('Error deducting credit:', error)
      // Don't fail the request if credit deduction fails
    }

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Generate API error:', error)
    
    // If it's an API key error, provide a helpful message
    if (error instanceof Error && error.message.includes('API key')) {
      return new Response(
        JSON.stringify({ 
          error: 'API configuration error. Please check your GROQ_API_KEY environment variable.',
          details: error.message 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}