'use client';

// import { useState } from "react";

   
import { findLatestapps } from "../posts";
import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { Button } from "../../components/ui/button";
import { useSearchParams } from "next/navigation";
import { indiotherproj } from "./printindiproj";
async function appsfetcher(searchfor) {
  var apps = await findLatestapps("projects/other");
  // var apps = [] as any;
  //  apps = await findLatestapps("projects/inp");
  
  return (
    <>
  {apps.map((app:any) => {
    return indiotherproj(app,searchfor);
  })}
  </>
  );
}
export default function OtherProjects({searchfor}) {
  // console.log(searchfor.searchfor)
    
    // const [scroll, setScroll] = useState(false);
    return (
      <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 dark:bg-gray-900 dark:text-white">
        
      {appsfetcher(searchfor)}
      </div>
      </>
    );
  }