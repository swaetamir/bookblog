"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

const statusFilters = ["all", "reading", "read", "tbr", "6 stars"]

const genres = ["all", "fiction", "non-fiction", "memoir", "classic", "literary fiction"]
const moods = ["all", "melancholy", "hopeful", "intense", "reflective", "romantic"]
const years = ["all", "2025", "2024", "2023"]

const books = [
  { id: 1, title: "If An Egyptian Cannot Speak English", cover: "/images/covers/if-an-egyptian-cannot-speak-english.jpg", status: "read", genre: "literary fiction", mood: "intense", year: "2024" },
  { id: 2, title: "Martyr!", cover: "/images/covers/martyr.jpg", status: "read", genre: "literary fiction", mood: "reflective", year: "2024" },
  { id: 3, title: "Never Let Me Go", cover: "/images/covers/never-let-me-go.jpg", status: "read", genre: "fiction", mood: "melancholy", year: "2023" },
  { id: 4, title: "Heart the Lover", cover: "/images/covers/heart-the-lover.jpg", status: "read", genre: "literary fiction", mood: "romantic", year: "2025" },
  { id: 5, title: "Giovanni's Room", cover: "/images/covers/giovannis-room.jpg", status: "read", genre: "classic", mood: "melancholy", year: "2024" },
  { id: 6, title: "Madonna in a Fur Coat", cover: "/images/covers/madonna-in-a-fur-coat.jpg", status: "reading", genre: "classic", mood: "romantic", year: "2025" },
  { id: 7, title: "The Count of Monte Cristo", cover: "/images/covers/the-count-of-monte-cristo.jpg", status: "tbr", genre: "classic", mood: "intense", year: "2025" },
  { id: 8, title: "We Could Have Been Friends, My Father and I", cover: "/images/covers/we-could-have-been-friends-my-father-and-i.jpg", status: "read", genre: "memoir", mood: "reflective", year: "2024" },
  { id: 9, title: "Norwegian Wood", cover: "/images/covers/norwegian-wood.jpg", status: "read", genre: "literary fiction", mood: "melancholy", year: "2023" },
  { id: 10, title: "Minor Detail", cover: "/images/covers/minor-detail.jpg", status: "tbr", genre: "fiction", mood: "intense", year: "2025" },
]

type DropdownType = "genre" | "mood" | "year" | null

export default function LibraryPage() {
  const [activeStatus, setActiveStatus] = useState("all")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedMood, setSelectedMood] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredBooks = books.filter((book) => {
    const statusMatch = activeStatus === "all" || activeStatus === "6 stars" || book.status === activeStatus
    const genreMatch = selectedGenre === "all" || book.genre === selectedGenre
    const moodMatch = selectedMood === "all" || book.mood === selectedMood
    const yearMatch = selectedYear === "all" || book.year === selectedYear
    return statusMatch && genreMatch && moodMatch && yearMatch
  })

  return (
    <main className="min-h-screen bg-[#101B36] text-[#C6C4B3] pt-28 pb-16 px-16">
      {/* Title Section */}
      <div className="ml-48 mb-8">
        <h1 className="font-serif text-[64px] leading-[55.31px]">LIBRARY</h1>
        <p className="font-sans text-[20px] font-light leading-[17.29px] mt-2">
          everything i've read, am reading, or want to read
        </p>
      </div>

      {/* Filter Bar */}
      <div className="ml-48 mb-12">
        <div className="bg-[#C6C4B3] rounded-lg p-6 inline-block">
          {/* Status Filters */}
          <div className="flex gap-12 mb-4">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`font-serif text-[36px] leading-[31.11px] text-[#2A1707] transition-all ${
                  activeStatus === status ? "underline underline-offset-4" : "hover:opacity-70"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Dropdown Filters */}
          <div className="flex gap-8" ref={dropdownRef}>
            {/* Genre Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "genre" ? null : "genre")}
                className="bg-[#ACAA9D] rounded-sm px-3 py-1 flex items-center gap-4 min-w-[125px]"
              >
                <span className="font-serif text-[34px] leading-[29.39px] text-[#2A1707]">
                  {selectedGenre === "all" ? "genre" : selectedGenre}
                </span>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#C6C4B3] ml-auto" />
              </button>
              {openDropdown === "genre" && (
                <div className="absolute top-full left-0 mt-1 bg-[#ACAA9D] rounded-sm py-2 min-w-[180px] z-20 shadow-lg">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => { setSelectedGenre(genre); setOpenDropdown(null) }}
                      className={`block w-full text-left px-3 py-1 font-serif text-[24px] text-[#2A1707] hover:bg-[#C6C4B3] ${selectedGenre === genre ? "bg-[#C6C4B3]" : ""}`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mood Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "mood" ? null : "mood")}
                className="bg-[#ACAA9D] rounded-sm px-3 py-1 flex items-center gap-4 min-w-[125px]"
              >
                <span className="font-serif text-[34px] leading-[29.39px] text-[#2A1707]">
                  {selectedMood === "all" ? "mood" : selectedMood}
                </span>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#C6C4B3] ml-auto" />
              </button>
              {openDropdown === "mood" && (
                <div className="absolute top-full left-0 mt-1 bg-[#ACAA9D] rounded-sm py-2 min-w-[180px] z-20 shadow-lg">
                  {moods.map((mood) => (
                    <button
                      key={mood}
                      onClick={() => { setSelectedMood(mood); setOpenDropdown(null) }}
                      className={`block w-full text-left px-3 py-1 font-serif text-[24px] text-[#2A1707] hover:bg-[#C6C4B3] ${selectedMood === mood ? "bg-[#C6C4B3]" : ""}`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Year Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "year" ? null : "year")}
                className="bg-[#ACAA9D] rounded-sm px-3 py-1 flex items-center gap-4 min-w-[125px]"
              >
                <span className="font-serif text-[34px] leading-[29.39px] text-[#2A1707]">
                  {selectedYear === "all" ? "year" : selectedYear}
                </span>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#C6C4B3] ml-auto" />
              </button>
              {openDropdown === "year" && (
                <div className="absolute top-full left-0 mt-1 bg-[#ACAA9D] rounded-sm py-2 min-w-[125px] z-20 shadow-lg">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => { setSelectedYear(year); setOpenDropdown(null) }}
                      className={`block w-full text-left px-3 py-1 font-serif text-[24px] text-[#2A1707] hover:bg-[#C6C4B3] ${selectedYear === year ? "bg-[#C6C4B3]" : ""}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-5 gap-x-16 gap-y-10 px-8">
        {filteredBooks.map((book) => (
          <div 
            key={book.id} 
            className="relative cursor-pointer w-[210px] h-[314px] transition-transform duration-300 hover:scale-110 hover:z-10"
          >
            <Image
              src={book.cover || "/placeholder.svg"}
              alt={book.title}
              width={210}
              height={314}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
