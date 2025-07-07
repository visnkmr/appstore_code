'use client'

import { Download } from "lucide-react";
import LineClamp from "./LineClamp";
import Llimage from "./llimage";
import StoreIcons from "./storeicons";
import Link from "next/link";
import {asseturl} from "../../precompile/consturls"
// import { useSearchParams } from "next/navigation";

export function indiotherproj(app){
    // console.log(app.title+"---"+searchfor+app.title.includes(searchfor))
    // const searchParams = useSearchParams()
    // // const search= if typeof searchParams.get("searchfor") === 'string'?searchParams.get("searchfor")=='string':undefined;
    // let searchfor = searchParams.get('searchfor')!==null?searchParams.get('searchfor'):""
    // if(!searchfor){
    //   searchfor=""
    // }
  //   if (!app.title.toLowerCase().includes(searchfor.toLowerCase()) && !app.content.toLowerCase().includes(searchfor.toLowerCase()) 
  //   || !app.image
  // ) {
  //       return (
  //         <>
          
  //         </>
  //       );
  //     }
    //   else
      {

          return ( 
            

        <div 
        key={app.title} 
        className="flex justify-center ">             
        
          {/* <div className="w-120 p-4">
              <img
              src={image}
              className="w-120 "/>
          </div> */}
          <div className="text-center w-full m-5 ">
            <div className="hover:bg-slate-200 hover:rounded-xl hover:text-gray-700 p-2">
          <Link href={`/appstore/details/${app.title}`}>
          {/* <div className="flex justify-center m-4">
            <Download className="mr-2"/><LineClamp className="font-bold" text={app.download} lines={2}/>
            </div> */}
            {/* <div className="">
            <LineClamp text={app.excerpt} className="font-bold text-center m-4" lines={1}/>
            </div> */}
            {/* <div className="flex justify-center">
             <div className="overflow-hidden"> */}
             {/* https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/images/ */}
            <Llimage url={asseturl+`/images/${app.image}.png`} label={app.title} version={app.version}/>
             {/* <img src={app.image} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
            {/* </div>
            </div> */}
            <div className="rounded-xl">
    
          <h3 className="font-bold text-center">{app.title}</h3>
          <noscript>
    
                 <div >{app.content}</div>
                </noscript>
          {/* <LineClamp text={app.content} lines={2} /> */}
    
          {/* <p className="line-clamp-2 text-center">{content}</p> */}
          {/* <a 
            href="https://github.com/visnkmr" 
            className="flex justify-center m-4 mr-2 rounded-md border shadow-md p-5 bg-green-400 hover:bg-green-700 dark:bg-green-800"
            rel="noopener" 
            target="_blank">
            <Download className="mr-5"/>Download
            </a> */}
    
          {/* <img src={image} className="w-32"/> */}
          {/* <StoreIcons storename={app.tags} w={1}/> */}
          {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
          
            </div>
            </Link>
            </div>
          </div>
        </div>
          );
      }
}

export function indiprojs(app,searchfor){
  if (!app.title.toLowerCase().includes(searchfor.toLowerCase()) && !app.content.toLowerCase().includes(searchfor.toLowerCase())) {
    return (
      <>
      
      </>
    );
  }
  return ( 
    <div 
    key={app.title} 
    className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
    
      {/* <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div> */}
      <div className="text-center w-full m-5">
      {/* <div className="flex justify-center m-4">
        <Download className="mr-2"/><LineClamp className="font-bold" text={app.download} lines={2}/>
        </div> */}
        {/* <div className="">
        <LineClamp text={app.excerpt} className="font-bold text-center m-4" lines={1}/>
        </div> */}
        {/*<div className="h-96 overflow-hidden">
        <Llimage url={app.image}/>
         /~ <img src={app.image} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> ~/
        </div>*/}
        <div className="flex justify-center">
         <div className="overflow-hidden">
         {/* https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/images/ */}
        <Llimage url={asseturl+`/images/${app.image}.png`} label={app.title}/>
         {/* <img src={app.image} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        </div>
        </div>
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
      <div className="flex justify-center m-4">
        <Download className="mr-2"/><LineClamp className="font-bold" text={app.download} lines={2}/>
        </div>
      {/* <img src={image} className="w-32"/> */}
      <StoreIcons storename={app.tags} w={1}/>
      {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
      
        </div>
      </div>
    </div>
      );
}
