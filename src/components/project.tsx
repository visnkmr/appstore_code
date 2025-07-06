'use client'
 
import { findLatestapps } from "../posts";
// import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { indiotherproj, indiprojs } from "./printindiproj";
import FilteredList from "./filteredlist";
import { useEffect, useState } from "react";
import axios from "axios";
import { asseturl } from "../../precompile/consturls";
import fs from 'fs';
import path from 'path';

interface ProjectProps {
  appsData: any[];
}

export default function Project() {
  // const [apps, setapps] = useState<any[]>([]);
   // Read the JSON file from the public directory (on the server)
  const filePath = path.join(process.cwd(), 'public', 'list.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const apps = JSON.parse(jsonData);

  
  // useEffect(() => {
  //   if (appsData && appsData.length > 0) {
  //     setapps(appsData);
  //   }
  // }, [appsData]);
  
  return (
    <>
    <FilteredList appst={apps}/>
    {/* <h1 className="sectitle">Android Apps</h1> */}
    <div className="box dark:bg-gray-900 dark:text-white">
    {/* {appsfetcher(searchfor)} */}
    </div>
    </>
  );
}
