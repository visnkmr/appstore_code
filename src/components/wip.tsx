import React from "react";
import { findLatestapps } from "../posts";
import LineClamp from "./LineClamp";
import StoreIcons from "./storeicons";
async function appsfetcher() {
    const apps = await findLatestapps("projects/inp");
    return (
      <>
    {apps.map((app:any) => {
        return ( 
            <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 "
        >
            <a 
            className={`mb-3 text-2xl font-semibold`}
            href={"https://github.com/visnkmr"}
            target="_blank"
            >
                {app.title}
            </a>
             <LineClamp className="m-4 max-w-[30ch] text-sm opacity-50" text={app.content} lines={2}/>
             <StoreIcons storename={app.tags} w={1}/>
        </div>
        
        );
    })}
    </>
    );
  }
export default function Workinp(){
    return (
        <>
        <div className="p-2 flex flex-col items-center mt-20 w-full">
        <div className='text-center font-bold mb-4 leading-tighter tracking-tighter md:px-0 md:text-[2.48rem] px-4 text-5xl m-15'>Recent Projects</div>

        <div className="mt-10 mb-8 grid text-center lg:mb-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {appsfetcher()}
        </div>
        </div>

        </>

    );
}