import React from "react";

export default function Stats(){
    return (
        <>
        {/* <div className="mx-auto px-9 sm:px-6 lg:px-8 lg:py-20 md:px-24 md:py-16 py-8" > */}
        <div className="mx-auto p-10" >
        <div className="flex flex-row justify-center"
        // className="grid sm:grid-cols-3"
        >
        
        <div className="text-center mb-10 md:mb-0 ">
          <div className="font-bold font-heading text-4xl lg:text-5xl text-[#039de1] xl:text-6xl">150k+</div>
          <p className="text-sm dark:text-slate-400 font-medium lg:text-base text-gray-800 tracking-widest uppercase">Reviews</p>
        </div>
        <div className="mx-5 h-12 w-1 dark:border-slate-200 ">

        </div>
        <div className="text-center dark:md:border-slate-500">
          <div className="font-bold lg:text-5xl text-4xl text-[#039de1] xl:text-6xl">15M+</div>
          <p className="text-sm dark:text-slate-400 font-medium lg:text-base text-gray-800 tracking-widest uppercase">sessions</p>
        </div>
        </div>
      </div>
        </>
    );
}