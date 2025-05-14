import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Add a premium display font for headings
const fontDisplay = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>VoiceAgent AI | Your AI Sales Agent for Real Estate</title>
        <meta name="description" content="Let your website talk, qualify, and convert leads—24/7" />
      </head>
      <body className={`min-h-screen font-sans antialiased ${fontSans.variable} ${fontDisplay.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
