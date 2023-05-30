   'use client'
   import React, { createContext, useState, useEffect } from 'react';
// import { getfromls, useLocalStorage } from './useLocalStorage';

//    export const ThemeContext = createContext({
//      dark: getfromls("dark",false),
//      toggle: () => {},
//    });
   interface tpprops extends React.HTMLAttributes<HTMLDivElement> {
 
  }
//    export const ThemeProvider = ({ children }:tpprops) => {
//      const [dark, setDark] = useLocalStorage("dark",true);
//     console.log("getting.."+ dark)
//      const toggle = () => {
//        setDark(!dark);
//      };

//      return (
//        <ThemeContext.Provider value={{ dark, toggle }}>
//          {children}
//        </ThemeContext.Provider>
//      );
//    };
// 'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }:tpprops) {
    // const [mounted, setMounted] = useState(false)
    // const { theme, setTheme } = useTheme()
  
    // useEffect only runs on the client, so now we can safely show the UI
    // useEffect(() => {
    //   setMounted(true)
    // }, [])  
  
    // if (!mounted) {
    //   return null
    // }
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}