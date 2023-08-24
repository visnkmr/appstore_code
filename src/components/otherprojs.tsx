// 'use client';

// import { useState } from "react";

   
import { findLatestapps } from "../posts";
import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { Button } from "../../components/ui/button";
async function appsfetcher() {
  var apps = await findLatestapps("projects/other");
  // var apps = [] as any;
  //  apps = await findLatestapps("projects/inp");
  return (
    <>
  {apps.map((app:any) => {
      return ( 
    <div 
    key={app.slug} 
    className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
    
      {/* <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div> */}
      <div className="text-center w-full ">
      {/* <div className="flex justify-center m-4">
        <Download className="mr-2"/><LineClamp className="font-bold" text={app.download} lines={2}/>
        </div> */}
        {/* <div className="">
        <LineClamp text={app.excerpt} className="font-bold text-center m-4" lines={1}/>
        </div> */}
        {/*<div className="h-96 overflow-hidden">
        /~ <Llimage url={app.image}/> ~/
         /~ <img src={app.image} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> ~/
        </div>*/}
        <div className="rounded-xl">

      <h3 className="font-bold text-center m-4">{app.title}</h3>
      <noscript>

             <div >{app.content}</div>
            </noscript>
      <LineClamp text={app.content} lines={2} />

      {/* <p className="line-clamp-2 text-center">{content}</p> */}
      <a 
        href="https://github.com/visnkmr" 
        className="flex justify-center m-4 mr-2 rounded-md border shadow-md p-5 bg-green-400 hover:bg-green-700 dark:bg-green-800"
        rel="noopener" 
        target="_blank">
        <Download className="mr-5"/>Download
        </a>

      {/* <img src={image} className="w-32"/> */}
      <StoreIcons storename={app.tags} w={1}/>
      {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
      
        </div>
      </div>
    </div>
      );
  })}
  </>
  );
}
export default function OtherProjects() {

    // const [scroll, setScroll] = useState(false);
    return (
      <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 dark:bg-gray-900 dark:text-white">
      {appsfetcher()}
      </div>
      </>
    );
  }