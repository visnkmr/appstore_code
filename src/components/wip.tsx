import React from "react";
import { findLatestapps } from "../posts";
import LineClamp from "./LineClamp";
import StoreIcons from "./storeicons";
async function appsfetcher() {
    const apps = await findLatestapps("projects/inp");
    return (
      <>
    {apps.map(({ slug, title, image,tags, content,excerpt,download }: { 
      slug: string, title: string, image: string, tags:Array<string>,content:string, excerpt:string,download:string }) => {
        return ( 
            <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <a 
            className={`mb-3 text-2xl font-semibold`}
            href=""
            target="_blank"
            >
                {title}
            </a>
             <LineClamp className="m-0 max-w-[30ch] text-sm opacity-50" text={content} lines={2}/>
             <StoreIcons storename={tags} w={1}/>
        </div>
        );
    })}
    </>
    );
  }
export default function Workinp(){
    return (
        <>
        <div className="p-2 flex flex-col items-center m-20">
        <div className='font-bold mb-4 leading-tighter tracking-tighter md:px-0 md:text-[2.48rem] px-4 text-5xl m-5'>Recent Projects</div>

        <div className="mb-8 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {appsfetcher()}
        </div>
        </div>

        </>

    );
}