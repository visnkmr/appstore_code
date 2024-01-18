'use client';

// import { useState } from "react";

   
import { findLatestapps } from "../posts";
// import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { indiotherproj, indiprojs } from "./printindiproj";
import FilteredList from "./filteredlist";
async function appsfetcher() {
  var apps = await findLatestapps("list.json");
  console.log("here2--->"+apps)
  console.log("reloaded")
  return apps
  // var apps = [] as any;
  //  apps = await findLatestapps("projects/inp");
  // return (
  //   <>
  // {apps.map((app:any) => {
  //     return indiotherproj(app,searchfor)
  // })}
  // </>
  // );
}
export default async function Project({searchfor}) {

    // const [scroll, setScroll] = useState(false);
    return (
      <>
      <FilteredList appst={await appsfetcher()}/>
      {/* <h1 className="sectitle">Android Apps</h1> */}
      <div className="box dark:bg-gray-900 dark:text-white">
      {/* {appsfetcher(searchfor)} */}
      </div>
      </>
    );
  }