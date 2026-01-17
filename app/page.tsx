import Image from "next/image"
import Link from "next/link"

const NAV = [
  { label: "blog", href: "/blog" },
  { label: "library", href: "/library" },
  { label: "stats", href: "/stats" },
  { label: "chat bot", href: "/chatbot" },
  { label: "about + contact me", href: "/about" },
]

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#101B36] text-[#C6C4B3] overflow-hidden">
      {/* avatar (top-left) */}
      <div className="absolute left top-0.5">
        <Image
          src="/avatar.png"
          alt="Swaeta"
          width={200}
          height={200}
          priority
          className="h-[200px] w-auto select-none drop-shadow-lg object-contain"
        />
      </div>

      {/* nav (top-right) */}
      <nav className="absolute right-14 top-8">
        <ul className="flex items-center gap-10 font-serif text-[30px] leading-7">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:opacity-90 transition-opacity">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* centered title */}
      <section className="grid min-h-screen place-items-center">
        <h1 className="font-serif font-normal text-center text-[96px] leading-[100px] md:text-[110px] lg:text-[120px] tracking-[-0.02em]">
          swae’s <br />
          book <br />
          blog
        </h1>
      </section>

      {/* signature (bottom-ish center) */}
      <div className="absolute left-1/2 top-[75%] -translate-x-1/2 text-right font-sans font-light text-[32px] leading-8">
        made with love
        <br />
        xo swaeta
      </div>
    </main>
  )
}
