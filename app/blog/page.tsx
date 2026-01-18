import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "if an egyptian cannot speak english",
    author: "noor naga",
    date: "04/2025",
    image: "/images/if-an-egyptian-cannot-speak-english.jpg",
    slug: "if-an-egyptian-cannot-speak-english",
  },
  {
    id: 2,
    title: "a spy in the house of love",
    author: "anais nin",
    date: "05/2025",
    image: "/images/a-spy-in-the-house-of-love.jpg",
    slug: "a-spy-in-the-house-of-love",
  },
]

const categories = [
  { name: "reviews", count: 12 },
  { name: "wraps", count: 4 },
  { name: "recs", count: 2 },
  { name: "misc", count: 1 },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#101B36] text-[#C6C4B3] pt-32 pb-16 px-24">
      {/* BLOG Title */}
      <h1 className="font-serif text-[64px] leading-[55.31px] mb-12 ml-48">
        BLOG
      </h1>

      <div className="flex gap-16">
        {/* Blog Posts */}
        <div className="flex flex-col gap-10 flex-1">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#C6C4B3] rounded-xl overflow-hidden flex h-[395px] max-w-[1079px]"
            >
              {/* Image */}
              <div className="p-10 flex-shrink-0">
                <div className="w-[420px] h-[315px] bg-[#D9D9D9] rounded-[5px] overflow-hidden relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`${post.title} by ${post.author}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 py-10 pr-12 flex flex-col justify-between">
                <div className="text-right">
                  <h2 className="font-serif text-[32px] leading-[27.66px] text-[#2A1707]">
                    {post.title}
                    <br />
                    {post.author}
                  </h2>
                  <p className="font-serif text-[24px] leading-[20.74px] text-black mt-4">
                    {post.date}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-serif text-[32px] leading-[27.66px] text-black text-right hover:underline"
                >
                  read more...
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar Categories */}
        <aside className="flex flex-col gap-6 pt-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog?category=${category.name}`}
              className="flex items-center gap-3 hover:underline"
            >
              <span className="w-2 h-2 bg-[#D9D9D9] rounded-full" />
              <span className="font-serif text-[32px] leading-[27.66px]">
                {category.name} ({category.count})
              </span>
            </Link>
          ))}
        </aside>
      </div>
    </main>
  )
}
