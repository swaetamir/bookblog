import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"

const gambarino = localFont({
  src: [
    {
      path: "./fonts/Gambarino-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gambarino",
  display: "swap",
})

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
})

export const metadata: Metadata = {
  title: "swae’s book blog",
  description: "a personal reading archive & data project",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gambarino.variable} ${switzer.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
