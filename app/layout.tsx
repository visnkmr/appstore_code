// 'use client'
import { ThemeProvider } from "../src/components/ThemeContext"
import Footer from "../src/components/footer"
import Thedarkhtml from "../src/components/thedarkhtml"
import Topthread from "../src/components/topthread"
import { useLocalStorage } from "../src/components/useLocalStorage"
import '../styles/globals.css'
import DarkButton from "./but"

export const metadata = {
  title: 'Vishnu N K',
  description: 'Platform agnostic Dekstop, TV, Mobile, Web app developer. Experience with Rust, Typescript, Kotlin, Java. Apps available on Google Play, Amazon Appstore, Microsoft App Store. On github, codeberg, gitea. Website build using NextJS SSG, Tailwind, React.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const [showon, setshow] = useLocalStorage("dark",true);
  return (
    
    <html className="" lang="en">
      <body className="dark:bg-gray-900">
        <ThemeProvider>

        <Thedarkhtml>
        <Topthread/>
        <DarkButton/>
        {children}
        <Footer/>
        </Thedarkhtml>
        </ThemeProvider>

      </body>

    </html>
  )
}
