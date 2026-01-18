"use client"

import Link from "next/link"
import { useState } from "react"

const timeFilters = ["all time", "this year", "2025"]

const booksPerMonth = [
  { month: "jan", books: 7 },
  { month: "feb", books: 5 },
  { month: "mar", books: 6 },
  { month: "apr", books: 3 },
  { month: "may", books: 4 },
  { month: "jun", books: 2 },
  { month: "july", books: 2 },
  { month: "aug", books: 10 },
  { month: "sep", books: 8 },
  { month: "oct", books: 7 },
  { month: "nov", books: 7 },
  { month: "dec", books: 7 },
]

const moodData = [
  { mood: "emotional", count: 24 },
  { mood: "reflective", count: 22 },
  { mood: "dark", count: 20 },
  { mood: "tense", count: 17 },
  { mood: "sad", count: 16 },
  { mood: "mysterious", count: 15 },
  { mood: "funny", count: 8 },
  { mood: "lighthearted", count: 4 },
  { mood: "inspiring", count: 3 },
  { mood: "hopeful", count: 2 },
  { mood: "challenging", count: 2 },
  { mood: "adventurous", count: 2 },
  { mood: "informative", count: 2 },
  { mood: "serious", count: 1 },
  { mood: "bleak", count: 1 },
]

const topAuthors = [
  { name: "eiichiro oda", count: 15, size: 48 },
  { name: "jessa hastings", count: 10, size: 40 },
  { name: "anais nin", count: 8, size: 41 },
  { name: "murakami", count: 7, size: 39 },
  { name: "madeline cash", count: 4, size: 30 },
  { name: "albert camus", count: 2, size: 22 },
  { name: "dostoyevsky", count: 2, size: 22 },
  { name: "sally rooney", count: 2, size: 22 },
  { name: "clarice lispector", count: 2, size: 20 },
  { name: "monica ali", count: 1, size: 18 },
]

export default function StatsPage() {
  const [activeFilter, setActiveFilter] = useState("all time")
  const [chartView, setChartView] = useState<"books" | "pages">("books")

  const maxBooks = Math.max(...booksPerMonth.map((d) => d.books))
  const maxMood = Math.max(...moodData.map((d) => d.count))

  return (
    <main className="min-h-screen bg-[#101B36] text-[#C6C4B3] pt-28 pb-16 px-16">
      {/* Header - same positioning as Blog and Library pages */}
      <div className="flex justify-between items-start ml-48 mb-8">
        <div>
          <h1 className="font-serif text-[64px] leading-[55.31px]">STATS</h1>
          <p className="font-sans text-[20px] font-light leading-[17.29px] text-[#ACAA9D] mt-2">
            my patterns in what i read & love
          </p>
        </div>
        <div className="flex gap-6">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-serif text-[24px] leading-[20.74px] text-[#F0EDD9] transition-all ${
                activeFilter === filter ? "underline underline-offset-4" : "opacity-70 hover:opacity-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content container */}
      <div>
        {/* Row 1: Three stat cards - centered with equal margins */}
        <div className="flex gap-[33px] mb-[27px] justify-center">
          <div className="w-[387px] h-[269px] bg-[#C6C4B3] rounded-[19px] flex flex-col items-center justify-center">
            <span className="font-serif text-[128px] leading-[110.63px] text-[#252B37]">259</span>
            <span className="font-serif text-[40px] leading-[34.57px] text-[#252B37]">total books read</span>
          </div>
          <div className="w-[387px] h-[269px] bg-[#C6C4B3] rounded-[19px] flex flex-col items-center justify-center">
            <span className="font-serif text-[128px] leading-[110.63px] text-[#252B37]">4.02</span>
            <span className="font-serif text-[40px] leading-[34.57px] text-[#252B37]">average rating</span>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4].map((i) => (<span key={i} className="text-[#252B37] text-3xl">★</span>))}
              <span className="text-[#252B37] text-3xl opacity-30">★</span>
            </div>
          </div>
          <div className="w-[387px] h-[269px] bg-[#C6C4B3] rounded-[19px] flex flex-col items-center justify-center">
            <span className="font-serif text-[40px] leading-[34.57px] text-[#252B37]">most read genre</span>
            <span className="font-serif text-[96px] leading-[82.97px] text-[#252B37] text-center">literary<br/>fiction</span>
          </div>
        </div>

        {/* Row 2: Goal + Books per month chart */}
        <div className="flex gap-[33px] mb-[27px] justify-center">
          {/* 2026 Goal with semi-circle progress */}
          <div className="w-[387px] h-[269px] bg-[#C6C4B3] rounded-[19px] p-6 flex flex-col">
            <span className="font-serif text-[48px] leading-[41.49px] text-[#252B37]">2026 goal</span>
            <div className="flex-1 flex flex-col items-center justify-center relative">
              {/* Semi-circle progress: 15 of 30 = 50% */}
              <svg width="240" height="130" viewBox="0 0 240 130" className="mb-0">
                {/* Background arc (full semi-circle) */}
                <path 
                  d="M 15 120 A 105 105 0 0 1 225 120" 
                  fill="none" 
                  stroke="#F0EDD9" 
                  strokeWidth="22" 
                  strokeLinecap="round" 
                />
                {/* Progress arc (50% - left half of the semi-circle) */}
                <path 
                  d="M 15 120 A 105 105 0 0 1 120 15" 
                  fill="none" 
                  stroke="#252B37" 
                  strokeWidth="22" 
                  strokeLinecap="round" 
                />
              </svg>
              <div className="text-center absolute bottom-6">
                <span className="font-serif text-[48px] leading-[41.49px] text-[#252B37]">15</span>
                <span className="font-serif text-[24px] leading-[20.74px] text-[#252B37] opacity-50"> of 30</span>
              </div>
            </div>
          </div>
          
          {/* Books/Pages per month chart */}
          <div className="w-[807px] h-[269px] bg-[#C6C4B3] rounded-[19px] p-6">
            <div className="flex items-baseline gap-4 mb-2">
              <button 
                onClick={() => setChartView("books")} 
                className={`font-serif text-[40px] leading-[34.57px] text-[#252B37] transition-opacity ${chartView === "books" ? "" : "opacity-30"}`}
              >
                books per month
              </button>
              {activeFilter === "2025" && (
                <span className="font-serif text-[15px] text-black">2025</span>
              )}
              <button 
                onClick={() => setChartView("pages")} 
                className={`font-serif text-[40px] leading-[34.57px] text-[#252B37] transition-opacity ${chartView === "pages" ? "" : "opacity-30"}`}
              >
                pages per month
              </button>
            </div>
            <div className="relative h-[180px]">
              <div className="absolute left-0 top-0 h-[140px] flex flex-col justify-between text-[15px] font-serif text-[#252B37]">
                <span>10</span><span>8</span><span>6</span><span>4</span><span>2</span>
              </div>
              <div className="ml-8 h-[140px] relative">
                <svg className="w-full h-full" viewBox="0 0 700 140" preserveAspectRatio="none">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={i} x1="0" y1={i * 35} x2="700" y2={i * 35} stroke="#252B37" strokeOpacity="0.1" strokeWidth="1" />
                  ))}
                  <polyline 
                    fill="none" 
                    stroke="#252B37" 
                    strokeWidth="2" 
                    points={booksPerMonth.map((d, i) => `${i * 58 + 20},${140 - (d.books / maxBooks) * 130}`).join(" ")} 
                  />
                  {booksPerMonth.map((d, i) => (
                    <circle key={d.month} cx={i * 58 + 20} cy={140 - (d.books / maxBooks) * 130} r="4" fill="#252B37" />
                  ))}
                </svg>
                <div className="flex justify-between text-[15px] font-serif text-[#252B37] mt-1">
                  {booksPerMonth.map((d) => (<span key={d.month}>{d.month}</span>))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3-5: Two column layout - Left (Genres + Top Authors) | Right (Pace/Page + Mood) */}
        <div className="flex gap-[33px] mb-[27px] justify-center items-end">
          {/* Left column: Genres + Top Authors stacked */}
          <div className="flex flex-col gap-[27px]">
            {/* Genres */}
            <div className="w-[387px] h-[320px] bg-[#C6C4B3] rounded-[19px] p-5">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-[64px] leading-[55.31px] text-[#252B37]">genres</span>
                {activeFilter === "2025" && (
                  <span className="font-serif text-[20px] leading-[17.29px] text-[#252B37]">2025</span>
                )}
              </div>
              {/* Treemap - heights scaled by book count */}
              <div className="flex gap-2">
                <div className="flex flex-col gap-1 flex-1">
                  <div className="bg-[#ACAA9D] rounded-[8px] h-[55px] flex items-center justify-center">
                    <span className="font-serif text-[24px] text-[#252B37]">literary (22)</span>
                  </div>
                  <div className="bg-[#ACAA9D] rounded-[8px] h-[52px] flex items-center justify-center">
                    <span className="font-serif text-[20px] text-[#252B37]">contemporary (21)</span>
                  </div>
                  <div className="bg-[#ACAA9D] rounded-[8px] h-[40px] flex items-center justify-center">
                    <span className="font-serif text-[20px] text-[#252B37]">romance (16)</span>
                  </div>
                  <div className="bg-[#ACAA9D] rounded-[8px] h-[30px] flex items-center justify-center">
                    <span className="font-serif text-[18px] text-[#252B37]">thriller (12)</span>
                  </div>
                  <div className="bg-[#ACAA9D] rounded-[8px] h-[30px] flex items-center justify-center">
                    <span className="font-serif text-[18px] text-[#252B37]">mystery (12)</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[100px]">
                  <div className="bg-[#ACAA9D] rounded-[6px] h-[32px] flex items-center justify-center"><span className="font-serif text-[13px] text-[#252B37]">classics (6)</span></div>
                  <div className="bg-[#ACAA9D] rounded-[6px] h-[32px] flex items-center justify-center"><span className="font-serif text-[13px] text-[#252B37]">manga (6)</span></div>
                  <div className="bg-[#ACAA9D] rounded-[6px] h-[28px] flex items-center justify-center"><span className="font-serif text-[11px] text-[#252B37] text-center leading-tight">short stories (4)</span></div>
                  <div className="bg-[#ACAA9D] rounded-[6px] h-[28px] flex items-center justify-center"><span className="font-serif text-[13px] text-[#252B37]">horror (4)</span></div>
                  <div className="flex gap-1">
                    <div className="bg-[#ACAA9D] rounded-[5px] h-[22px] flex-1 flex items-center justify-center"><span className="font-serif text-[9px] text-[#252B37]">memoir (2)</span></div>
                    <div className="bg-[#ACAA9D] rounded-[5px] h-[22px] flex-1 flex items-center justify-center"><span className="font-serif text-[8px] text-[#252B37]">historical (1)</span></div>
                  </div>
                  <div className="bg-[#ACAA9D] rounded-[5px] h-[18px] flex items-center justify-center"><span className="font-serif text-[9px] text-[#252B37]">dystopian (2)</span></div>
                </div>
              </div>
            </div>

            {/* Top Authors - using exact Figma font sizes */}
            <div className="w-[387px] h-[390px] bg-[#C6C4B3] rounded-[19px] p-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-[48px] leading-[41.49px] text-[#252B37]">top authors</span>
                {activeFilter === "2025" && (
                  <span className="font-serif text-[20px] leading-[17.29px] text-[#252B37]">2025</span>
                )}
              </div>
              <div className="flex flex-col">
                {topAuthors.map((author) => (
                  <span 
                    key={author.name} 
                    className="font-serif text-[#252B37]" 
                    style={{ fontSize: `${author.size}px`, lineHeight: 1.1 }}
                  >
                    {author.name} ({author.count})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Pace/Page Number row + Mood Distribution */}
          <div className="flex flex-col gap-[27px]">
            {/* Pace + Page Number side by side */}
            <div className="flex gap-[33px]">
              {/* Pace pie chart */}
              <div className="w-[387px] h-[250px] bg-[#C6C4B3] rounded-[19px] p-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-[48px] leading-[41.49px] text-[#252B37]">pace</span>
                  {activeFilter === "2025" && (
                    <span className="font-serif text-[20px] leading-[17.29px] text-[#252B37]">2025</span>
                  )}
                </div>
                <div className="flex items-center justify-center relative">
                  <svg width="180" height="180" viewBox="0 0 180 180">
                    <path d="M 90 90 L 90 10 A 80 80 0 0 1 90 170 Z" fill="#D9D9D9" />
                    <path d="M 90 90 L 90 170 A 80 80 0 0 1 18 50 Z" fill="rgba(37, 43, 55, 0.6)" />
                    <path d="M 90 90 L 18 50 A 80 80 0 0 1 90 10 Z" fill="#252B37" />
                  </svg>
                  <span className="absolute top-[45px] right-[15px] font-serif text-[13px] text-black">medium (50%)</span>
                  <span className="absolute bottom-[45px] left-[25px] font-serif text-[11px] text-[#F0EDD9]">fast (35%)</span>
                  <span className="absolute top-[55px] left-[10px] font-serif text-[10px] text-white">slow (15%)</span>
                </div>
              </div>

              {/* Page Number pie chart */}
              <div className="w-[387px] h-[250px] bg-[#C6C4B3] rounded-[19px] p-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-[40px] leading-[34.57px] text-[#252B37]">page number</span>
                  {activeFilter === "2025" && (
                    <span className="font-serif text-[20px] leading-[17.29px] text-[#252B37]">2025</span>
                  )}
                </div>
                <div className="flex items-center justify-center relative">
                  <svg width="180" height="180" viewBox="0 0 180 180">
                    <path d="M 90 90 L 90 10 A 80 80 0 0 1 161 130 Z" fill="#D9D9D9" />
                    <path d="M 90 90 L 161 130 A 80 80 0 0 1 90 170 Z" fill="rgba(37, 43, 55, 0.6)" />
                    <path d="M 90 90 L 90 170 A 80 80 0 0 1 90 10 Z" fill="#252B37" />
                  </svg>
                  <span className="absolute top-[45px] right-[10px] font-serif text-[12px] text-black">{"< 300 (60%)"}</span>
                  <span className="absolute bottom-[35px] right-[30px] font-serif text-[10px] text-[#F0EDD9]">300-400 (25%)</span>
                  <span className="absolute bottom-[45px] left-[20px] font-serif text-[9px] text-white">500+ (15%)</span>
                </div>
              </div>
            </div>

            {/* Mood Distribution - bar chart with Figma dimensions */}
            <div className="w-[807px] h-[460px] bg-[#C6C4B3] rounded-[19px] p-5">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-[48px] leading-[41.49px] text-[#252B37]">mood distribution</span>
                {activeFilter === "2025" && (
                  <span className="font-serif text-[20px] leading-[17.29px] text-[#252B37]">2025</span>
                )}
              </div>
              <div className="relative h-[380px]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-[320px] flex flex-col justify-between text-[20px] font-serif text-[#252B37]">
                  <span>25</span><span>20</span><span>15</span><span>10</span><span>5</span>
                </div>
                {/* Grid lines */}
                <div className="absolute left-[40px] top-0 w-[700px] h-[320px]">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="absolute w-full h-[4px] bg-[#252B37]" 
                      style={{ top: `${i * 64}px`, opacity: i === 5 ? 1 : 0.33 }} 
                    />
                  ))}
                </div>
                {/* Bars */}
                <div className="ml-[40px] flex items-end gap-[27px] h-[320px] relative z-10">
                  {moodData.map((d) => (
                    <div 
                      key={d.mood} 
                      className="w-[17px] bg-[#252B37]" 
                      style={{ height: `${(d.count / 25) * 320}px` }} 
                    />
                  ))}
                </div>
                {/* X-axis labels */}
                <div className="ml-[40px] flex gap-[27px] mt-3">
                  {moodData.map((d) => (
                    <span 
                      key={d.mood} 
                      className="w-[17px] font-serif text-[15px] text-[#252B37] -rotate-[42deg] origin-top-left whitespace-nowrap"
                    >
                      {d.mood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 6: Total Pages + Avg Time + Summary - aligned with rows above (total width 1227px) */}
        <div className="flex gap-[33px] justify-center">
          <div className="w-[387px] h-[269px] bg-[#C6C4B3] rounded-[19px] flex flex-col items-center justify-center">
            <span className="font-serif text-[128px] leading-[110.63px] text-[#252B37]">64 377</span>
            <span className="font-serif text-[40px] leading-[34.57px] text-[#252B37]">total pages read</span>
          </div>
          <div className="w-[360px] h-[269px] bg-[#C6C4B3] rounded-[19px] p-6 flex flex-col justify-center">
            <span className="font-serif text-[40px] leading-[34.57px] text-[#252B37]">average time to<br/>finish</span>
            <span className="font-serif text-[96px] leading-[82.97px] text-[#252B37]">2 days</span>
          </div>
          <div className="w-[414px] h-[269px] bg-[#C6C4B3] rounded-[19px] p-4">
            <span className="font-serif text-[36px] leading-[31.11px] text-black">swae&apos;s summary</span>
            <p className="font-serif text-[24px] leading-[20.74px] text-black mt-3">
              i gravitate mostly towards literary fiction with introspective themes. my favourite
              time to read during the year are winter and fall! i&apos;m a quick reader, often reaching
              for shorter novels.
            </p>
            <p className="font-serif text-[24px] leading-[20.74px] text-black mt-3">
              want a deeper dive into my reading habits? → <Link href="/chatbot" className="underline">ask my library!</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
