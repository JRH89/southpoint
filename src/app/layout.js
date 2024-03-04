import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "South Point 13",
  description: "Southpoint sits at the top of South Main Street, designed to take advantage of the breathtaking views of the valley. Homebuyers will enjoy the large lots suitable for single and two-story houses."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
