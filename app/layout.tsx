import type React from "react"
import type { Metadata } from "next"
// Updated to use Inter, IBM Plex Mono, and Montserrat for professional, industrial aesthetic
import { Inter, IBM_Plex_Mono, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  // Updated metadata for EISAZ website
  title: "EISAZ - Engineering, Iron & Steel Association of Zimbabwe",
  description:
    "The premier strategic employer association representing Zimbabwe's engineering, iron, and steel sector. Partner to government, champion of industry growth.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${montserrat.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
