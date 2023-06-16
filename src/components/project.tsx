// 'use client';

// import { useState } from "react";

   
import { findLatestapps } from "../posts";
import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
async function appsfetcher() {
  var apps = await findLatestapps("projects");
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
      <div className="text-center w-full">
        <div className="h-96 overflow-hidden">

         <img src="https://play-lh.googleusercontent.com/NtXjy17Ve1e91vP6zRcaFK5Gil8fEJ0xML9bcmLI_6Ubjgkuh4JujhfCvs5nlFCu_Is=w2560-h1440-rw" className="w-full object-contain flex justify-center rounded-2xl"/>
        </div>
      <h3 className="font-bold text-center m-4">{app.title}</h3>
      <noscript>

             <div >{app.content}</div>
            </noscript>
      <LineClamp text={app.content} lines={2} />

      {/* <p className="line-clamp-2 text-center">{content}</p> */}
      <LineClamp text={app.excerpt} className="font-bold text-center m-4"/>

      {/* <img src={image} className="w-32"/> */}
      <StoreIcons storename={app.tags} w={1}/>
      {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
      <LineClamp className="font-bold text-center m-4" text={app.download} lines={2}/>
      </div>
    </div>
      );
  })}
  </>
  );
}
export default async function Project() {

    // const [scroll, setScroll] = useState(false);
    return (
      <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 dark:bg-gray-900 dark:text-white">
      {await appsfetcher()}
      </div>
      </>
    );
  }