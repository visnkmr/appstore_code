import React from "react";
import Navbar from "../../src/components/navbar";
import '../../styles/globals.css'
import Footer from "../../src/components/footer"
import DarkButton from "../../app/but"
import { Providers } from "../../src/components/ThemeContext"
import Contactme from "../../src/components/contactme";
import { Download } from "lucide-react";

export async function getStaticPaths() {
  // Get the path to the JSON file
   // Get the path to the JSON file
   const others = await fetch(
    `https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/projects/other/list.json`
  ).then((res) => res.json())
  const apps = await fetch(
    `https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/projects/list.json`
  ).then((res) => res.json())
  const products=[...others,...apps];
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
  const others = await fetch(
    `https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/projects/other/list.json`
  ).then((res) => res.json())
  const apps = await fetch(
    `https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/projects/list.json`
  ).then((res) => res.json())
  const products=[...others,...apps];
  // Find the object that matches the id
  const data = products.find((item) => item.title === params.title);
  // Return the data as props
  return {
    props: {
      data,
    },
  };
}

export default function Details({ data }) {
  var app=data
  return (
    <>
    <Providers>

{/* <Thedarkhtml> */}
{/* <Topthread/> */}
<DarkButton/>
    <div className="dark:bg-gray-900">
      <div>
        <h1 className="title">Appstore</h1>
        <Navbar/>
        <h3 className="font-bold p-10 text-center text-4xl">{app.title}</h3>
    <div className="flex justify-center">
    
             <div className="overflow-hidden">
             {/* https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/images/ */}
            <img src={`https://cdn.jsdelivr.net/gh/visnkmr/appstore@main/images/${app.image}.png`} className="w-40 object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> 
            </div>
            </div>
            <div className="text-center" >
                  {app.description}
                  </div>
            <div className="rounded-xl">
    
          
          {/* <noscript> */}
          <div className="flex justify-center">

<a 
href="https://github.com/visnkmr" 
className="flex justify-center m-4 mr-2 rounded-md border shadow-md p-5 bg-green-400 hover:bg-green-700 dark:bg-green-800 w-40 "
rel="noopener" 
target="_blank">
<Download className="mr-5"/>Download
</a> 
</div>

                 <div className="text-center p-20" >
                  {app.content}
                  {app.platform}
                  </div>
                  
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
            
            <Contactme/>
          <p className="text-center flex justify-center italic">This page was made using NextJS, React and Tailwind.</p>
            </div>
            <Footer/>
            </Providers>
    </>
  );
}