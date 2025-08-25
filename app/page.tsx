'use client'
import dynamic from 'next/dynamic'
import '../styles/globals.css'
import { Search, Grid, Palette } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react'

const Projects = dynamic(() => import("../src/components/project"));
const Ct = dynamic(() => import("../src/components/ct"));

export default function Page() {
   const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useTheme()
    // const { dark, toggle } = useContext(ThemeContext);
    // const [ dark, setdark ] = useState(false);
    // const [showon, setshow] = useLocalStorage("dark",true);
    // console.log("onload"+showon)
    useEffect(() => {
      // dark?setTheme('light'):setTheme('dark');
      const darkIcon = document.getElementById("theme-toggle-dark-icon")!;
      const lightIcon = document.getElementById("theme-toggle-light-icon")!;
      if (theme === 'dark') {
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
      } else {
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
      }
    }, [theme]);
   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setSearchQuery(event.target.value);
   };

   return (
     <div className="min-h-screen bg-background">
       {/* Top Search Section - Google Play Store Style */}
       <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/40">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="py-4">
             <div className="flex items-center justify-between gap-4">
               <div className="flex-1 max-w-2xl">
                 <div className="relative">
                   <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                   <input
                     type="text"
                     placeholder="Search apps, games, or developers..."
                     value={searchQuery}
                     onChange={handleSearchChange}
                     className="w-full pl-12 pr-4 py-3 rounded-full border border-border/50 bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-200"
                     aria-label="Search applications"
                   />
                 </div>
               </div>
               <div className="hidden sm:flex items-center space-x-4">
                 <span className="text-sm text-muted-foreground font-medium">
                   {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                 </span>
                 
                 {/* <Link
                   href="/alternate"
                   className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all duration-200"
                   aria-label="View creative design version"
                 >
                   <Palette className="h-4 w-4" />
                   <span>Creative</span>
                 </Link> */}
                 <button
        id="theme-toggle"
        type="button"
        aria-label='light dark mode toggle'
        className="text-gray-500  rounded-lg text-sm p-2.5"
        onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <svg
          id="theme-toggle-dark-icon"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{display: "none"}}
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          id="theme-toggle-light-icon"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{display: "none"}}
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          ></path>
        </svg>
      </button>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Apps Grid Section */}
       <section className="py-6">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           {/* Apps Grid */}
           <div className="fade-in-up">
             <Projects searchQuery={searchQuery}/>
           </div>
         </div>
       </section>

       {/* Additional Content Section */}
       <section className="bg-muted/20">
         {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8"> */}
           <Ct/>
         {/* </div> */}
       </section>
     </div>
   );
 }