import Link from "next/link"

const socialLinks = [
  { label: "email", href: "mailto:your@email.com" },
  { label: "goodreads", href: "https://goodreads.com" },
  { label: "github", href: "https://github.com" },
  { label: "instagram", href: "https://instagram.com" },
  { label: "spotify", href: "https://spotify.com" },
  { label: "substack", href: "https://substack.com" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#101B36] text-[#C6C4B3] pt-52 pb-16 px-16">
      {/* Content Card */}
      <div className="ml-24 bg-[#C6C4B3] rounded-[19px] max-w-[1145px] p-11">
        {/* Welcome Text */}
        <p className="font-serif text-[36px] leading-[31.11px] text-black">
          welcome to my book blog! as an avid reader & full-time
          <br />
          CS & stats student, i wanted to create a little passion project
          <br />
          that blends my love for literature, creation and programming.
          <br />
          i hope you enjoyed going through this site as much and i
          <br />
          loved creating it!
        </p>

        {/* Sign off */}
        <p className="font-serif text-[36px] leading-[31.11px] text-black mt-16">
          lots of love, swaeta
        </p>

        {/* Contact Section */}
        <div className="mt-20">
          <h2 className="font-serif text-[36px] leading-[31.11px] text-[#252B37]">
            contact me!
          </h2>

          {/* Social Links */}
          <div className="flex gap-8 mt-8">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[36px] leading-[31.11px] text-[#252B37] hover:underline transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
