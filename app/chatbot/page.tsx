"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
}

// Mock responses for now - can be replaced with actual AI later
const mockResponses: Record<string, string> = {
  "what are swae's favourite books?": "she REALLY loved if an egyptian cannot speak english, martyr!, heart the lover, the count of monte cristo...\n\nyou can click here to read her blog post about her all time favourite books!",
  "what would swae recommend?": "based on her reading history, she'd probably recommend starting with literary fiction that has introspective themes! some of her top picks include novels by anais nin and dostoevsky.",
  "how did she read 56 books last year?": "swae reads during her commute, before bed, and on weekends! she also sets monthly reading goals and tracks her progress. the key is consistency over speed!",
  default: "hmm, i'm not sure about that one! try asking about swae's favourite books, recommendations, or her reading habits!"
}

const suggestedQuestions = [
  "what are swae's favourite books?",
  "what would swae recommend?",
  "how did she read 56 books last year?"
]

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content: "hi, i'm roscoe!! i'm swaeta's cat. how can i help you today?"
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: messages.length,
      role: "user",
      content: text.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setShowSuggestions(false)
    setIsTyping(true)

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const responseText = mockResponses[text.toLowerCase()] || mockResponses.default
    
    const assistantMessage: Message = {
      id: messages.length + 1,
      role: "assistant",
      content: responseText
    }

    setIsTyping(false)
    setMessages(prev => [...prev, assistantMessage])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <main className="h-screen bg-[#101B36] text-[#C6C4B3] pt-28 px-16 flex flex-col overflow-hidden">
      {/* Title */}
      <div className="ml-48 mb-6 flex-shrink-0">
        <h1 className="font-serif text-[64px] leading-[55.31px] text-[#C6C4B3]">
          CHAT WITH ROSCOE
        </h1>
      </div>

      {/* Chat Container - centered */}
      <div className="max-w-[940px] mx-auto flex flex-col flex-1 min-h-0 w-full">
        {/* Messages Area - scrollable */}
        <div className="flex-1 space-y-6 mb-4 overflow-y-auto pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {/* Roscoe Avatar - only for assistant messages */}
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-[120px] h-[120px] relative">
                  <Image
                    src="/images/roscoe.png"
                    alt="Roscoe the cat"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-[525px] px-5 py-6 rounded-[19px] ${
                  message.role === "user"
                    ? "bg-[#C6C4B3]/75 rounded-[10px]"
                    : "bg-[#C6C4B3]"
                }`}
              >
                <p className="font-serif text-[24px] leading-[20.74px] text-black whitespace-pre-line">
                  {message.content}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="font-serif text-[20px] leading-[17.29px] text-[#C6C4B3] ml-[136px]">
              roscoe is typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions - positioned above input, spread evenly */}
        {showSuggestions && messages.length === 1 && (
          <div className="flex justify-center gap-[30px] mb-4">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                onClick={() => handleSend(question)}
                className="px-5 py-4 bg-[#C6C4B3]/75 rounded-[10px] font-serif text-[20px] leading-[17.29px] text-[#252B37] hover:bg-[#C6C4B3] transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* Input Area - positioned higher, not at bottom */}
        <form onSubmit={handleSubmit} className="relative flex-shrink-0 mb-[120px]">
          <div className="w-full h-[100px] bg-[#C6C4B3] rounded-[24px] flex items-center px-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask roscoe..."
              className="flex-1 bg-transparent font-serif text-[20px] leading-[17.29px] text-black placeholder:text-black/30 outline-none"
            />
            <button
              type="submit"
              className="w-[35px] h-[31px] bg-[#ACAA9D] rounded-[12px] flex items-center justify-center hover:bg-[#9d9b8f] transition-colors"
            >
              <span className="font-serif text-[24px] leading-[20.74px] text-[#252B37]">→</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
