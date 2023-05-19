import React from "react";

export default function Planglist(){
    return(
        <>
        <div className="mx-auto px-9 max-w-7xl sm:px-6 lg:px-8 lg:py-20 md:px-24 md:py-16 py-8" >
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="text-center  mb-10 md:mb-0 ">
            <div className="font-bold text-4xl lg:text-5xl text-[#039de1] xl:text-6xl">Rust</div>
          </div>
          <div className="text-center  mb-10 md:mb-0">
            <div className="font-bold lg:text-5xl text-2xl text-[#039de1] xl:text-6xl">Typescript</div>
          </div>
          <div className="text-center  mb-10 md:mb-0">
            <div className="font-bold lg:text-5xl text-4xl text-[#039de1] xl:text-6xl">Kotlin</div>
          </div>
          <div className="text-center  ">
            <div className="font-bold lg:text-5xl text-4xl text-[#039de1] xl:text-6xl">Java</div>
          </div>
        </div>
      </div>
        </>
    );
} 