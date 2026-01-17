export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#101B36] text-[#C6C4B3] overflow-hidden">
      {/* centered title */}
      <section className="grid min-h-screen place-items-center">
        <h1 className="font-serif font-normal text-center text-[96px] leading-[100px] md:text-[110px] lg:text-[120px] tracking-[-0.02em]">
          swae's <br />
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
