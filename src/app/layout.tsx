import type { Metadata } from "next"
import { ThemeProvider } from "@/provider/theme-provider"
import { JetBrains_Mono } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css"

const trajan = localFont({
  src: "../fonts/Trajan Pro Bold.ttf",
})

export const metadata: Metadata = {
  title: "Hollow Knight Skins",
  description: "Get the best skins for the void knight.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={trajan.className}
      >
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
