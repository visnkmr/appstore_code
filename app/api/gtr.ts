// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import useSWR from 'swr'
// import appdirs from 'appdirs';
'use client'
import { useEffect, useState } from "react";
import { Commits } from "../../src/shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function gtr(path:string){
  // const [dta,setd]=useState([] as Commits[])
  // const [isloading,setild]=useState(true)
  // useEffect(() => {
  //   async function fetchd(){

  //     const response = await fetch('https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/'+path)
  //     const cdata = await response.json()
  //     console.log(cdata)
  //     setd(cdata)
  //     setild(false)

  //   }
  //   fetchd();
  // },[])
  let { data } = useQuery({ queryKey: ['posts'], queryFn: async()=>{
        const response = await axios.get('https://cdn.jsdelivr.net/gh/visnkmr/visnkmr.github.io@main/'+path)
        console.log(response.data)
          return await response.data
      } })
  // const appdirs = require('appdirs');
  // const path = require('path');
  // const configDir = appdirs.userConfigDir();
  // const configFilePath = path.join(configDir, 'gtr', 'gtrl.json');
  // const file = fs.readFileSync('/home/roger/.config/gtr/'+path);
  // console.log(file)
  // const data = file.toString();
//   console.log(data)
//   const data = JSON.parse(file.toString());
if(!data){
  data=[]
}
  return data;

};

// export default (req: NextApiRequest, res: NextApiResponse) => {
//     const file = fs.readFileSync('/home/roger/.config/gtr/gtr.json');
//     const data = JSON.parse(file.toString());
//     res.status(200).json(data);
//   };