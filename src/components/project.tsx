// 'use client';

import React from "react";
// import { useState } from "react";
import Aas from "../stores/aas"
import Gp from "../stores/gp"
import Mas from "../stores/mas"

   
import { findLatestapps } from "../posts";
import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
async function appsfetcher() {
  const apps = await findLatestapps("projects");
  return (
    <>
  {apps.map(({ slug, title, image,tags, content,excerpt,download }: { 
    slug: string, title: string, image: string, tags:Array<string>,content:string, excerpt:string,download:string }) => {
      return ( 
    <div 
    key={slug} 
    className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
      {/* <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div> */}
      <div className="text-center w-full">
      <h3 className="font-bold text-center m-4">{title}</h3>
      <LineClamp text={content} lines={2} />

      {/* <p className="line-clamp-2 text-center">{content}</p> */}
      <LineClamp text={excerpt} className="font-bold text-center m-4"/>

      {/* <img src={image} className="w-32"/> */}
      <StoreIcons storename={tags} w={1}/>
      {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
      <LineClamp className="font-bold text-center m-4" text={download} lines={2}/>
      </div>
    </div>
      );
  })}
  </>
  );
}
export default function Project() {
    // const [scroll, setScroll] = useState(false);
    return (
      <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4">
      {appsfetcher()}
      </div>
      </>
    );
  }