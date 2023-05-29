   'use client'
   import React, { createContext, useState } from 'react';
import { getfromls, useLocalStorage } from './useLocalStorage';

   export const ThemeContext = createContext({
     dark: getfromls("dark",false),
     toggle: () => {},
   });
   interface tpprops extends React.HTMLAttributes<HTMLDivElement> {
 
  }
   export const ThemeProvider = ({ children }:tpprops) => {
     const [dark, setDark] = useLocalStorage("dark",true);
    console.log("getting.."+ dark)
     const toggle = () => {
       setDark(!dark);
     };

     return (
       <ThemeContext.Provider value={{ dark, toggle }}>
         {children}
       </ThemeContext.Provider>
     );
   };
