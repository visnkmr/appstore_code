import React from "react";
import Textspin from "./textloop";
const TEXTS = [
  "Android",
  "Fire OS",
  "Windows",
  "Linux",
  "Mac",
  "Web"
  ];
export default function Stats(){
    return (
        <>
        {/* <div className="mx-auto px-9 sm:px-6 lg:px-8 lg:py-20 md:px-24 md:py-16 py-8" > */}
        <div className="mx-auto pt-10 pb-10" >
        <div className="flex flex-row justify-center"
        // className="grid sm:grid-cols-3"
        >
        
        <div className="text-center mb-10 md:mb-0">
          <p className="text-sm dark:text-slate-400 font-medium lg:text-base text-gray-800 tracking-widest">Apps for</p>
          <div className="font-bold font-heading text-4xl lg:text-5xl text-[#039de1] xl:text-6xl">
            <Textspin text={TEXTS} direction={'up'} interval={1500}/>
            </div>
        </div>
        {/* <div className="block sm:hidden">
        <h1 className="text-gray-900 sm:mb-8 text-center font-bold font-heading leading-tighter tracking-tighter xl:px-0 xl:text-[3.48rem] px-4 text-2xl sm:text-5xl dark:text-white ">
        Products available for Android, Fire OS, Windows, Linux, Mac, Web.
        </h1>
        </div> */}
        {/* <div className="mx-5 h-12 w-1 dark:border-slate-200 ">

        </div> */}
        
        </div>
      </div>
        </>
    );
}