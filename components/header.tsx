"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const NAV = [
  { label: "blog", href: "/blog" },
  { label: "library", href: "/library" },
  { label: "stats", href: "/stats" },
  { label: "chat bot", href: "/chatbot" },
  { label: "about + contact me", href: "/about" },
]

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setHidden(true)
      } else {
        // Scrolling up
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* avatar (top-left) - links to homepage */}
      <Link href="/" className="fixed left-0 top-0.5 z-50 group">
        <Image
          src="/avatar.png"
          alt="Swaeta"
          width={200}
          height={200}
          priority
          className="h-[200px] w-auto select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
        />
      </Link>

      {/* nav (top-right) - hides on scroll down, shows on scroll up */}
      <nav
        className={`fixed right-14 top-8 z-50 transition-all duration-300 ${
          hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <ul className="flex items-center gap-10 font-serif text-[30px] leading-7 text-[#C6C4B3]">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:opacity-90 transition-opacity">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
