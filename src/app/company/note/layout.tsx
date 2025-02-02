import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/Company/Top/header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "note Clone",
  description: "A note.com clone built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}

