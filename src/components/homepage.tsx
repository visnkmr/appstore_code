// 'use client'

import React from "react";
import Topthread from "./topthread";
import DarkButton from "../../app/but";
import Stores from "./Stores";
// import Storelist from "../shared/types";
import { stores } from "../shared/data";
// import showon from '../../app/but'
// import { useEffect } from 'react';

export default function Homepage(){
    // var randval="no";
    // useEffect(() => {
    //     if(showon()){
    //         randval="ol"
    //     }else{
    //         randval="po"
    //     }
    //     // This function will run whenever the value of showon changes
    //     console.log('showon has changed to', showon);
    //   }, [showon]);
    return(
        <>
        
        <div className="bg-slate-100">
        <Topthread/>
        <DarkButton/>
        <div className="mx-auto px-4 max-w-7xl sm:px-6 2xl:h-auto md:flex sm:h-screen ">
            <div className="block md:flex lg:py-16 md:py-12 md:text-left py-12 text-center">
            <div className="flex items-center basis-3/5 md:pb-0 md:pr-16 md:py-0 mx-auto pb-12">
            <div>
            <h1 className="font-bold mb-4 font-heading leading-tighter tracking-tighter xl:px-0 xl:text-[3.48rem] px-4 text-5xl"><span className="hidden">Coding with Passion and Purpose.</span> Products available for Android, Fire OS, Windows, Linux, Mac, Web Android.
            </h1>
            <div className="mx-auto max-w-3xl">
            <p className="text-gray-600 dark:text-slate-400 text-xl mb-8">
            Our products have featured on most media around the world, in most languages. 
            </p>
            <div className="flex justify-center flex-col flex-nowrap gap-4 m-auto max-w-xs md:justify-start md:m-0 sm:flex-row sm:max-w-md">
            
                <Stores {...stores} />
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}