

// import { useState } from "react";

   
import { findLatestapps } from "../posts";
// import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import { Download } from "lucide-react/";
import Llimage from "./llimage";
import { indiotherproj, indiprojs } from "./printindiproj";
import FilteredList from "./filteredlist";
import {applist} from "../../public/list.json"
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {asseturl} from "../../precompile/consturls"
// import {getapps} from "../../lib/getapps"
export default function Project() {
  console.log(applist)
  // const [apps,setapps]=useState([])
  // useEffect(()=>{
  //   axios.get(asseturl+"list.json").then((appslist)=>{
  //     // console.log("======?  "+JSON.stringify(appslist.data))
  //     setapps((appslist).data)
  //   }).catch(e=>console.log(e))
  // },[]);
    // const [scroll, setScroll] = useState(false);
    return (
      <>
      <FilteredList appst={(applist)}/>
      </>
    );
  }