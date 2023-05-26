import React from "react";
import Smsll from "../../src/components/smsll";
import dwc from "../../src/dealcommits";
import { findLatestapps } from "../../src/posts";
// import '../../styles/globals.css'

export default async function Iou(){
  var apps = await findLatestapps("projects");

    return (
        <>
        {/* <div className="text-bold text-center">hello</div> */}
        <Smsll item={dwc("gtr.json",-1)}/>
        </>

    );
} 