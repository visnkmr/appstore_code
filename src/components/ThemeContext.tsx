   'use client'
   import React, { createContext, useState } from 'react';

   export const ThemeContext = createContext({
     dark: false,
     toggle: () => {},
   });

   export const ThemeProvider = ({ children }) => {
     const [dark, setDark] = useState(false);

     const toggle = () => {
       setDark(!dark);
     };

     return (
       <ThemeContext.Provider value={{ dark, toggle }}>
         {children}
       </ThemeContext.Provider>
     );
   };
