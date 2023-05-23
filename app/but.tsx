'use client';
import { useState,useEffect } from 'react';
import React from "react";
import { useLocalStorage } from '../src/components/useLocalStorage';

export default function DarkButton() {
  // console.log(localStorage.getItem("dark"))
  const [showon, setshow] = useLocalStorage("dark",true);
  // const [showon, setshow] = useLocalStorage("dark",true);
  // console.log("onload"+showon)
  useEffect(() => {
    const darkIcon = document.getElementById("theme-toggle-dark-icon")!;
    const lightIcon = document.getElementById("theme-toggle-light-icon")!;
    if (showon) {
      darkIcon.style.display = "block";
      lightIcon.style.display = "none";
    } else {
      darkIcon.style.display = "none";
      lightIcon.style.display = "block";
    }
  }, [showon]);
  // useEffect(() => {
  //   console.log("sadsd")
  // },[showon]);
  return (
    <>
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500  rounded-lg text-sm p-2.5"
        onClick={() => setshow((value:boolean)=>{return !value})}
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
    </>
  );
}
