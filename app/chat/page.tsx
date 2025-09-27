"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import {
  Bot,
  Code,
  FileText,
  Palette,
  ArrowRight,
  Copy,
  Download,
  Sparkles,
  Zap,
  Shield,
  Send,
  User
} from "lucide-react"
// Removed useChat import due to API changes
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface ContractOption {
  id: string
  title: string
  description: string
  icon: any
  prompt: string
}

const contractOptions: ContractOption[] = [
  {
    id: "define",
    title: "Define Your Contract",
    description: "Describe what your smart contract should do in natural language",
    icon: FileText,
    prompt: "I want to create a smart contract that can "
  },
  {
    id: "working",
    title: "Contract Working",
    description: "Explain how your current contract works and what it should do",
    icon: Bot,
    prompt: "My contract currently works by "
  },
  {
    id: "template",
    title: "Prebuilt Templates",
    description: "Choose from common contract templates like NFT, Token, etc.",
    icon: Palette,
    prompt: "Create a template for a "
  },
  {
    id: "optimize",
    title: "Optimize Contract",
    description: "Improve existing contract code for better performance and security",
    icon: Shield,
    prompt: "Optimize this contract for better gas efficiency and security:\n\n"
  }
]

interface GeneratedCode {
  content: string
  language: string
  filename: string
}

export default function ChatPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [generatedCode, setGeneratedCode] = useState<GeneratedCode | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const codeEndRef = useRef<HTMLDivElement>(null)

  // Real AI chat implementation
  // Custom chat implementation
  const [messages, setMessages] = useState<Array<{id: string, role: 'user' | 'assistant' | 'system', content: string}>>(
    selectedOption ? [{
      id: 'system',
      role: 'system',
      content: 'You are an expert Flow blockchain developer specializing in Cadence smart contracts. Generate clean, secure, and efficient contract code.'
    }] : []
  )
  const [input, setInput] = useState('')
  const [isChatLoading, setIsChatLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isChatLoading) return

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: input
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsChatLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error('No response body')
      }

      let assistantContent = ''
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: ''
      }

      setMessages(prev => [...prev, assistantMessage])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = new TextDecoder().decode(value)
        assistantContent += chunk

        setMessages(prev => 
          prev.map(msg => 
            msg.id === assistantMessage.id 
              ? { ...msg, content: assistantContent }
              : msg
          )
        )
      }

      // Extract code from AI response
      const codeMatch = assistantContent.match(/```(?:cadence)?\n([\s\S]*?)\n```/);
      if (codeMatch) {
        setGeneratedCode({
          content: codeMatch[1].trim(),
          language: 'cadence',
          filename: 'contract.cdc'
        });
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }])
    } finally {
      setIsChatLoading(false)
    }
  }

  useEffect(() => {
    if (generatedCode && codeEndRef.current) {
      codeEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [generatedCode])

  const handleOptionSelect = (option: ContractOption) => {
    setSelectedOption(option.id)
    setMessages([{
      id: "system",
      role: "system",
      content: `You are an expert Flow blockchain developer specializing in Cadence smart contracts. Generate clean, secure, and efficient contract code. Always provide explanations and follow best practices.`
    }])
  }

  const copyToClipboard = async () => {
    if (generatedCode) {
      await navigator.clipboard.writeText(generatedCode.content)
    }
  }

  const downloadCode = () => {
    if (generatedCode) {
      const blob = new Blob([generatedCode.content], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = generatedCode.filename
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  const startChat = (option: ContractOption) => {
    handleOptionSelect(option)
  }

  if (!selectedOption) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <AnimatedSection className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
            <h1 className="text-foreground text-5xl font-bold mb-4">
              AI Smart Contract Generator
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Choose how you'd like to create your Cadence smart contract for Flow blockchain
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contractOptions.map((option, index) => (
              <AnimatedSection key={option.id} delay={index * 0.1}>
                <Card
                  className="h-full bg-card border-border hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => startChat(option)}
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">
                      {option.description}
                    </p>
                    <div className="mt-4 text-center">
                      <ArrowRight className="w-4 h-4 text-primary mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Chat Panel */}
        <div className="flex-1 flex flex-col border-r border-border">
          {/* Header */}
          <div className="p-4 border-b border-border bg-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="text-foreground font-semibold">
                    {contractOptions.find(o => o.id === selectedOption)?.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    AI Smart Contract Assistant
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedOption(null)}
              >
                Back to Options
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.filter(m => m.role !== "system").map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  message.role === "assistant"
                    ? "bg-primary/20"
                    : "bg-secondary/20"
                }`}>
                  {message.role === "assistant" ? (
                    <Bot className="w-4 h-4 text-primary" />
                  ) : (
                    <User className="w-4 h-4 text-secondary-foreground" />
                  )}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "assistant"
                    ? "bg-muted text-muted-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/20">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={codeEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Describe your smart contract requirements..."
                className="flex-1 bg-background border border-border rounded-2xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                disabled={isChatLoading}
              />
              <Button
                type="submit"
                disabled={isChatLoading || !input.trim()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-2xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Code Panel */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="p-4 border-b border-border bg-card">
            <div className="flex items-center justify-between">
              <h3 className="text-foreground font-semibold">Generated Code</h3>
              {generatedCode && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadCode}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            {generatedCode ? (
              <div className="h-full">
                <SyntaxHighlighter
                  language="cadence"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    height: '100%',
                    fontSize: '14px',
                    borderRadius: '0'
                  }}
                >
                  {generatedCode.content}
                </SyntaxHighlighter>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Generated code will appear here</p>
                  <p className="text-sm">Start chatting to generate your smart contract</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}