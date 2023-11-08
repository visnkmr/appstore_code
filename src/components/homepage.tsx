
import React from "react";
import Topthread from "./topthread";
import DarkButton from "./Themetogglebutton";
import Stores from "./Stores";
// import Storelist from "../shared/types";
import { stores } from "../shared/data";
import Stats from "./stats";
import Mq from "./mq";
import Marquee from "react-fast-marquee";
import '../../styles/globals.css'

import TextTransition, { presets } from 'react-text-transition';


import Workinp from "./wip";
import Caro from "./carousel";
import recentprojs from "./recentprojs";
import Textspin from "./textloop";
import Upto from "./countup";
// import showon from '../../app/but'
// import { useEffect } from 'react';
const TEXTS = [
    "Efficient",
    "Responsive",
    "Secure",
    ];
const DTEXTS = [
    "Phone",
    "Tablet",
    "PC",
    "TV",
    ];
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
        
        
        <div className="dark:bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 md:flex justify-center">
            <div className="block md:flex text-center">
            {/* <div className="block md:flex lg:py-16 md:py-12 py-12 text-center"> */}
            <div className="flex flex-col items-center basis-3/5 md:pb-0 md:pr-16 md:py-0 mx-auto ">
            <div className="flex flex-col sm:flex-row">

                <span className="flex">

                <div className="m-auto">
                {/*<h1 className="font-bold mb-4 font-heading leading-tighter tracking-tighter xl:px-0 xl:text-[3.48rem] px-4 text-2xl sm:text-5xl dark:text-white text-center">
                    /~ <span className="hidden">Coding with Passion and Purpose.</span>  ~/
                /~ Innovative software solutions crafted with expertise. ~/
                /~ Building efficient and effective software for a better world ~/
                /~ Products available for Android, Fire OS, Windows, Linux, Mac, Web Android. ~/
                </h1>*/}
                <div className="mx-auto">
                <h1 className="text-gray-900 sm:mb-8 text-center font-bold font-heading leading-tighter tracking-tighter xl:px-0 xl:text-[3.48rem] px-4 text-2xl sm:text-5xl dark:text-white mb-10">
                {/* Our products have featured on most media outlets around the world, in most languages.  */}
                Building <Textspin text={TEXTS} direction={"down"} interval={1000}/> apps.
                <noscript>
                Products available for Android, Fire OS, Windows, Linux, Mac, Web.
                </noscript>
                </h1>
                <div className="flex justify-center pb-10">
                
                    <Stores {...stores} />
                </div>
                <h1 className="text-gray-900 sm:mb-8 text-center font-bold font-heading leading-tighter tracking-tighter xl:px-0 xl:text-[3.48rem] px-4 text-2xl sm:text-5xl dark:text-white ">
                    <noscript>
                        Powering 15M+ sessions.
                    </noscript>
                   Powering <Upto/>+ sessions.
                </h1>
                </div>
                
            

                </div>
                </span>
                {/* <span className="flex items-center justify-center">
                    <img alt="image of Vishnu N K" className="rounded-full w-32 sm:w-96 " src="https://cdn.jsdelivr.net/gh/visnkmr/hv2static@main/1654419210688.jpg"/>
                </span> */}
            </div>

            {/* <div className="sm:flex sm:flex-row"> */}
            <Caro/>

            {/* </div> */}
            
            
            </div>
            
            </div>
            
        </div>
        {recentprojs()}
        {/* <Mq/> */}
        <Stats/>

        </div>
        </>
    );
}