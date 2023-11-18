import React from "react";
import * as fs from 'node:fs';
import path, { join } from 'path';

import Navbar from "../../src/components/navbar";
import '../../styles/globals.css'
import Footer from "../../src/components/footer"
import DarkButton from "../../src/components/Themetogglebutton"
import { Providers } from "../../src/components/ThemeContext"
import Contactme from "../../src/components/contactme";
import { Download } from "lucide-react";
import PlatformList from "../../src/components/platformlist";
import StoreIcons from "../../src/components/storeicons";
import DeviceList from "../../src/components/devicelist";
import {asseturl} from "../../precompile/consturls"
import {open} from "../../precompile/makejsonfromfile"


export async function getStaticPaths() {
  await open();
  // Get the path to the JSON file
   // Get the path to the JSON file
   let data = 
//    fs.readFileSync(join(process.cwd(),"public","otherappslist.json"), 'utf-8');
// const others = JSON.parse(data);
// data = 
fs.readFileSync(join(process.cwd(),"public","list.json"), 'utf-8');
const apps = JSON.parse(data);
  //  const others = await fetch(
  //   asseturl+`otherappslist.json`
  // ).then((res) => res.json())
  // const apps = await fetch(
  //   asseturl+`list.json`
  //   // `https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/projects/list.json`
  // ).then((res) => res.json())
  const products=[
    // ...others,
    ...apps];
  // Read the JSON file
  
  // Map over the array of objects and return their ids as paths
  const paths = products.map((item) => ({
    params: { title: item.title },
  }));
  // Return the paths and fallback option
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  // Get the path to the JSON file
  let data = 
//   fs.readFileSync(join(process.cwd(),"public","otherappslist.json"), 'utf-8');
// const others = JSON.parse(data);
// data = 
fs.readFileSync(join(process.cwd(),"public","list.json"), 'utf-8');
const apps = JSON.parse(data);
  const products=[
    // ...others,
    ...apps];
  // Find the object that matches the id
  data = products.find((item) => item.title === params.title);
  // Return the data as props
  return {
    props: {
      data,
    },
  };
}

export default function Details({ data }) {
  var app=data
  console.log(app)
  return (
    <>
    <Providers>

{/* <Thedarkhtml> */}
{/* <Topthread/> */}
<DarkButton showback={true}/>
    <div className="dark:bg-gray-900">
      <div>
        {/* <h1 className="title">Appstore</h1> */}
        <div className="h-1">

        </div>
        {/* <Navbar/> */}
        

        <div className="mt-10 mb-5">
        <div className="m-3 text-center" >
                  {app.description}
                  </div>
        <h3 className="font-bold text-center text-4xl">{app.title}</h3>
        </div>

    <div className="flex justify-center">
    
             <div className="overflow-hidden">
             {/* https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/images/ */}
            <img src={asseturl+`images/${app.image}.png`} className="w-40 img-box-papp dark:border-4 border-0 border-gray-600"/> 
            </div>
            {/* <div className="w-[20%]"></div> */}
            
            </div>
            <div className="grid place-items-center">

<a 
href={`${app.downloadurl}`} 
className="flex justify-center m-4 mr-2 rounded-md border shadow-md p-5 bg-green-400 hover:bg-green-700 dark:bg-green-800 w-40 "
rel="noopener" 
target="_blank">
<Download className="mr-5"/>Download
</a> 
</div>
            <div className="slider m-5 sm:flex sm:justify-center">
  {app.screenshot && app.screenshot.map((image, index) => (

      <img key={index} src={asseturl+`${image}`} className="slide w-36 img-box-pscr" />
  ))}
  
</div>
            
            <div className="rounded-xl">
    
          
          {/* <noscript> */}
          
                 {/* <div className="text-center p-5" >
                  {app.content}
                  </div> */}
                  
                {/* </noscript> */}
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
            </div>
            <PlatformList platformname={app.tags}/>

            <StoreIcons storename={app.tags} w={1}/>
            <DeviceList platformname={app.tags}/>
            {/* <Contactme/> */}
          {/* <p className="text-center flex justify-center italic">This page was made using NextJS, React and Tailwind.</p> */}
            </div>
            <Footer/>
            </Providers>
    </>
  );
}