'use client';

import React from "react";
import Smsll from "../../src/components/smsll";
import dwc from "../../src/dealcommits";
import { findLatestapps } from "../../src/posts";
import Footer from "../../src/components/footer";
// import '../../styles/globals.css'

export default async function Tor(){
  // var apps = await findLatestapps("projects");

    return (
        <>
        {/* <div className="text-bold text-center">hello</div> */}
        
        {/* <Footer/> */}
      {/* <div 
      className="bg-white dark:bg-gray-900 block"
      > */}

        <Smsll  item={dwc("gtr.json",-1)}/>
      {/* </div> */}
        </>

    );
} 