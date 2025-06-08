import type { Metadata } from "next"
import { ThemeProvider } from "@/provider/theme-provider"
import { Lato } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
        className={lato.className}
      >
        <head />
        <body className="h-dvh overflow-y-hidden antialiased flex">
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
