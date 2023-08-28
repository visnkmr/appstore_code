// 'use client';

// import { useState } from "react";

   
import { findLatestapps } from "../posts";
import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { Button } from "../../components/ui/button";
import { useSearchParams } from "next/navigation";
import { printindiproj } from "./printindiproj";
async function appsfetcher() {
  var apps = await findLatestapps("projects/other");
  console.log(apps)
  // var apps = [] as any;
  //  apps = await findLatestapps("projects/inp");
  
  return (
    <>
  {apps.map((app:any) => {
    return printindiproj(app);
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