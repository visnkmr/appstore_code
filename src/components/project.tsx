
'use client'; 

 
import { findLatestapps } from "../posts";
// import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { indiotherproj, indiprojs } from "./printindiproj";
import FilteredList from "./filteredlist";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {asseturl} from "../../precompile/consturls"

export default async function Project() {
  
  const [apps,setapps]=useState([])
  useEffect(()=>{
    axios.get(asseturl+"/list.json").then((appslist)=>{
      // console.log("======?  "+JSON.stringify(appslist.data))
      setapps((appslist).data)
    }).catch(e=>console.log(e))
  },[]);
    // const [scroll, setScroll] = useState(false);
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