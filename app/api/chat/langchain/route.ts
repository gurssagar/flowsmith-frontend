import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Simulate LangChain streaming response for demo purposes
    // In a real implementation, you would integrate with actual LangChain
    const systemPrompt = `You are a LangChain-powered AI assistant specializing in Flow blockchain and Cadence smart contracts. 
    
    IMPORTANT: Always generate complete, production-ready Cadence smart contract code with:
    - Proper contract structure with pub fun init()
    - Resource definitions with proper interfaces
    - Access control (pub, access(all), etc.)
    - Error handling with pre and post conditions
    - Comments explaining key functionality
    - Proper import statements

    Always respond with:
    1. A clear explanation of what the contract does
    2. The complete Cadence code in a code block with \`\`\`cadence syntax
    3. Any deployment considerations or usage examples

    Focus on:
    - NFT contracts (NonFungibleToken standard)
    - Fungible Token contracts (FungibleToken standard)
    - Marketplace contracts
    - Staking contracts
    - DAO contracts
    - Simple utility contracts

    Never generate incomplete code snippets. Always provide full, deployable contracts.`;

    // Add system message if not present
    const enhancedMessages = messages[0]?.role === 'system'
      ? messages
      : [{ role: 'system', content: systemPrompt }, ...messages];

    const result = await streamText({
      model: {
        provider: 'openai',
        model: 'gpt-3.5-turbo',
        apiKey: process.env.OPENAI_API_KEY || 'demo-key'
      },
      system: systemPrompt,
      messages: enhancedMessages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('LangChain API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}