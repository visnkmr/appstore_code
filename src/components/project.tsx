// 'use client';

import React from "react";
// import { useState } from "react";
import Aas from "../stores/aas"
import Gp from "../stores/gp"
import Mas from "../stores/mas"

   
import { findLatestapps } from "../posts";
async function appsfetcher() {
  const apps = await findLatestapps("projects");
  return (
    <>
  {apps.map(({ slug, title, image,tags, content }: { 
    slug: string, title: string, image: string, tags:Array<string>,content:string }) => {
      const showaas = tags.includes('aas'); 
      const showgps = tags.includes('gp'); 
      const showmas = tags.includes('ms'); 
      const showgh = tags.includes('gh');
      return ( 
    <div 
    key={slug} 
    className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-80 mb-8  p-4 ">             
      <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div>
      <div className="center">
      <h3 className="font-bold text-center m-4">{title}</h3>
      <p className="line-clamp-4">{content}</p>
      {/* <img src={image} className="w-32"/> */}
      <div className="flex">
      {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )} 
      {showmas && (
      <Mas/>
      )} 
      {showgh && (
      <span className="flex items-center justify-center">
        Github
      </span>
      )}
      </div>   
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
      {appsfetcher()}
      </>
    );
  }