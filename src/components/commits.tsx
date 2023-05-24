// 'use client';

// import { useState } from "react";

   
// import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import dwc from "../dealcommits";
async function appsfetcher() {
  console.log(dwc().length)
  // var apps = await findLatestapps("projects");
  //  apps = await findLatestapps("projects/inp");
  return (
    <>
  {dwc().map((ic) => {
      return ( 
    <div 
    key={ic.time} 
    className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
      {/* <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div> */}
      <div className="text-center w-full">
      <a href={ic.commit} className="font-bold text-center m-4">{ic.reponame}</a>
      <LineClamp text={ic.message} lines={2} />

      {/* <p className="line-clamp-2 text-center">{content}</p> */}
      <LineClamp text={"(+) "+ic.additions.toString()+" (-) "+ic.deletions.toString()+" (Total) "+ic.total.toString()} className="font-bold text-center m-4"/>

      {/* <img src={image} className="w-32"/> */}
      {/* <StoreIcons storename={tags} w={1}/> */}
      {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
      {/* <LineClamp className="font-bold text-center m-4" text={ic.reponame} lines={2}/> */}
      </div>
    </div>
      );
  })}
  </>
  );
}
export default function Commits() {
    // const [scroll, setScroll] = useState(false);
    return (
      <>
       <div className="p-2 flex flex-col items-center mt-20 w-full">
        <div className='text-center font-bold mb-5 leading-tighter tracking-tighter md:px-0 md:text-[2.48rem] px-4 text-5xl m-15'>Recent Commits</div>
        <p className="text-gray-900 dark:text-slate-400 text-xl mb-8">
            {/* Our products have featured on most media outlets around the world, in most languages.  */}
            Recent commits from local gitea instance.
            </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
        {appsfetcher()}
        </div>
      </div>
      </>
    );
  }