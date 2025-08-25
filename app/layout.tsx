import React from "react"
import { Providers } from "../src/components/ThemeContext"
import Footer from "../src/components/footer"
import '../styles/globals.css'
import DarkButton from "../src/components/Themetogglebutton"
import {Metadata} from 'next'

export const metadata:Metadata = {
  title: 'Vishnu N K - App Portfolio',
  description: 'Platform agnostic Desktop, TV, Mobile, Web app developer. Experience with Rust, Typescript, Kotlin, Java. Apps available on Google Play, Amazon Appstore, Microsoft App Store. On github, codeberg, gitea. Website build using NextJS SSG, Tailwind, React.',
}

export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
     <html suppressHydrationWarning lang="en">
       <head>
         <meta name="google-site-verification" content="xp7_dmcns-vHy2f1ga7pYmGO779Zoy3Kk6RmMixlx-A" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
       </head>
       <body className="min-h-screen bg-background font-sans antialiased">
         <Providers>
           <div className="relative flex min-h-screen flex-col">
             {/* Main content - App Store style layout */}
             <main className="flex-1 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none"></div>
               <div className="relative">
                 {children}
               </div>
             </main>

             {/* Bottom Navigation - Google Play Store style */}
             <nav className="sticky bottom-0 z-50 w-full border-t border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 shadow-lg">
               <div className="container mx-auto px-4 sm:px-6">
                 <div className="flex h-16 items-center justify-between">
                  
                   <div className="flex items-center space-x-2">
                     <div className="relative">
                       <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-50"></div>
                       <h1 className="relative text-lg font-bold gradient-text tracking-tight">
                         Apps
                       </h1>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4">
                     <DarkButton showback={false} />
                   </div>
                 </div>
               </div>
             </nav>

             {/* Footer with additional info */}
             <Footer/>
           </div>
         </Providers>
       </body>
     </html>
   )
 }
