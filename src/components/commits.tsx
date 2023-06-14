// 'use client';

// import { useState } from "react";

   
// import StoreIcons from "./storeicons";
import dwc from "../dealcommits";
import LineClamp from "./LineClamp";
import Infiscrollcomp from "./infiscroll";
import Otherview from "./Otherview";
import Indicommit from "./indicommit";
import Mq from "./mq";
import React from "react";
// import { useState } from "react";
export function appsfetcher() {
  // console.log(dwc().length)
  // var apps = await findLatestapps("projects");
  //  apps = await findLatestapps("projects/inp");
  return (
    <>
  {dwc("gtr.json",5).map((ic) => {
      return ( 
        <Indicommit ic={ic}/>
      );
  })}
  </>
  );
}
export default function Commits() {
  // const [whichone,setwhichone]=useState(1);
    // const [scroll, setScroll] = useState(false);
    return (
      <>
       <div className="p-2 flex flex-col items-center w-full dark:bg-gray-900 dark:text-white">
        {/* <div className='text-center font-bold mb-5 leading-tighter tracking-tight md:px-0 md:text-[2.48rem] px-4 text-5xl m-15'>Products</div> */}
        <p className="text-gray-900 dark:text-slate-400 text-xl mb-8 text-center">
            {/* Our products have featured on most media outlets around the world, in most languages.  */}
            Recent commits from local Gitea instance, Codeberg.<br/> Except private repos other repo mirrors available on Github.
            </p>
          {/* <button onClick={()=>whichone===1?setwhichone(0):setwhichone(1)}>
            Scroll/List
          </button> */}
          <noscript>
        {showlistorscroll(0)}
        </noscript>
        {showlistorscroll(1)}
        <a
        href="/iou"
        target="_blank"
        className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 rounded-full place-self-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">Checkout more</a>
      </div>
      </>
    );
  }

  export function showlistorscroll(whichone:number){
    if(whichone===1)return (
      <>
    {Mq(0)}
      </>

    );
    return (
      <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

        {appsfetcher()}

        </div>
      </>

    )
  }