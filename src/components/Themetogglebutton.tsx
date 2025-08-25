'use client';
import { useState,useEffect, useContext } from 'react';
import React from "react";
import {ArrowLeft} from "lucide-react"
// import { useLocalStorage } from './useLocalStorage';
// import { ThemeContext } from '../src/components/ThemeContext';
import { useTheme } from 'next-themes';
import '../../styles/imgstutter.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// export function darkorwhite(){
//   let key="dark";
//   let wtr=false;
//   try {
//     // Get from local storage by key
//     const item = window.localStorage.getItem(key);
//     console.log(item)
//     // Parse stored json or if none return initialValue
//     wtr= item ? JSON.parse(item) : false;
//   } catch (error) {
//     // If error also return initialValue
//     console.log(error);
//     wtr= false;
//   }
//   if(wtr){
//     return(
//       <>
//       </>
//     )
//   }
//   // return {wtr}
// }

export default function DarkButton(k:{showback:boolean}) {
  // console.log(localStorage.getItem("dark"))
  // const [showon, setshow] = useLocalStorage("dark",true);
  
  // useEffect(() => {
  //   console.log("sadsd")
  // },[showon]);
  return (
    <div>
      <div className='overflow-hidden'>
        <div className='float-left p-2.5'>
          <div className="flex justify-start " >

        {<div className='m-3  border border-gray-300'>
          
          {!k.showback ? (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <button className="p-2 ml-1">
        <div className="flex items-center whitespace-nowrap">
          <ArrowLeft />
          Back
        </div>
      </button>
    </a>
  ) : (
    <button onClick={() => history.back()} className="p-2 ml-1">
      <div className="flex items-center whitespace-nowrap">
        <ArrowLeft />
        Back
      </div>
    </button>
  )}
        </div>}

      </div>

        </div>
        <div className='float-right p-2.5'>


        </div>
      </div>

      
    {/* <div className='dark:bg-gray-900 h-10'> */}
    {/* <span className='p-2.5 absolute right-0'> */}

      
      {/* </span> */}
{/* <span className='p-2.5 absolute left-0 z-10'>

                    <img alt="image of Vishnu N K" className="topimg rounded-full w-9 sm:w-20" src="https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/images/profpic.webp" />
</span> */}
    </div>

    // </div>
  );
}
