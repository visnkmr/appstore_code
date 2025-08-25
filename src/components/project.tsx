
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

interface ProjectProps {
   searchQuery?: string;
}

export default function Project({ searchQuery = '' }: ProjectProps) {
   const [apps, setApps] = useState([])

   useEffect(() => {
     axios.get(asseturl + "/list.json").then((appslist) => {
       setApps(appslist.data)
     }).catch(e => console.log(e))
   }, []);

   return (
     <>
       <FilteredList appst={apps} searchQuery={searchQuery} />
     </>
   );
}