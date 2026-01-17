import Image from "next/image"
import Link from "next/link"

const NAV = [
    { label: "blog", href: "/blog" },
    { label: "library", href: "/library" },
    { label: "stats", href: "/stats" },
    { label: "chat bot", href: "/chatbot" },
    { label: "about + contact me", href: "/about" },
  ]

  export function Header() {
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
  
        {/* nav (top-right) */}
        <nav className="fixed right-14 top-8 z-50">
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