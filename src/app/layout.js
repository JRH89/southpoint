import { Inter } from "next/font/google"
import Head from "next/head"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arc Viz by Hooker Hill Studios",
  description: "Architectural Visualization featuring photo-realistic renders.",
  url: "https://arcviz.hookerhillstudios.com/",
  image: "https://arcviz.hookerhillstudios.com/_next/image?url=%2Fimages%2FRenders%2F1A%2FFront.png&w=3840&q=100",
  twitterUsername: "@GameDevJared89",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterUsername} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
