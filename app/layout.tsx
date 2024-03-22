// 'use client'
// import { ThemeProvider } from "../src/components/ThemeContext"
import React from "react"
import { Providers } from "../src/components/ThemeContext"
import Footer from "../src/components/footer"
// import Thedarkhtml from "../src/components/thedarkhtml"
import Topthread from "../src/components/topthread"
import { useLocalStorage } from "../src/components/useLocalStorage"
import '../styles/globals.css'
import DarkButton from "../src/components/Themetogglebutton"
import {Metadata} from 'next'
import { open } from "../precompile/makejsonfromfile"

export const metadata:Metadata = {
  title: 'Vishnu N K',
  description: 'Platform agnostic Dekstop, TV, Mobile, Web app developer. Experience with Rust, Typescript, Kotlin, Java. Apps available on Google Play, Amazon Appstore, Microsoft App Store. On github, codeberg, gitea. Website build using NextJS SSG, Tailwind, React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  open();
  
  // const [showon, setshow] = useLocalStorage("dark",true);
  return (
    <html suppressHydrationWarning className="" lang="en">
      <head>
        {/* google verification for site ownership v */}
      <meta name="google-site-verification" content="xp7_dmcns-vHy2f1ga7pYmGO779Zoy3Kk6RmMixlx-A" />
      </head>
      <body className="dark:bg-gray-900">
        <Providers>

        {/* <Thedarkhtml> */}
        {/* <Topthread/> */}
        <DarkButton showback={false}/>
        {children}
        <Footer/>
        {/* </Thedarkhtml> */}
        </Providers>

      </body>

    </html>
  )
}
