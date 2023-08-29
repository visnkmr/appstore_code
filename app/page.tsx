// 'use client'
import dynamic from 'next/dynamic'

// import Project from "../src/components/project";
const OtherProjects =dynamic(()=>import ("../src/components/otherprojs"));
const Projects =dynamic(()=>import ("../src/components/project"));
const Search =dynamic(()=>import ("../src/components/search"));

import Homepage from "../src/components/homepage";
// import Planglist from "../src/components/planlist";
// import Stats from "../src/components/stats";
import Workinp from "../src/components/wip";
import Footer from "../src/components/footer";
import '../styles/globals.css'
// import Ct from "../src/components/ct";
const Ct =dynamic(()=>import ("../src/components/ct"));

const Commits =dynamic(()=>import ("../src/components/commits"));
// import Commits from "../src/components/commits";
import Topthread from "../src/components/topthread";
import DarkButton from "./but";
import Mq from "../src/components/mq";
import Contactme from "../src/components/contactme";
import { Input } from '../components/ui/input';
import React from 'react';
import { useSearchParams } from 'next/navigation';
// import { ThemeContext, ThemeProvider } from "../src/components/ThemeContext";
// import { useContext } from "react";
// import { createServerContext } from 'react';

// import dwc from "../src/dealcommits";
// import gtr from "./api/gtr";

export default function Page({
  searchParams
}) {
  // console.log(searchParams)
  // const [ss, setss] = React.useState("")
  //  const searchParams = useSearchParams()
  //   // const search= if typeof searchParams.get("searchfor") === 'string'?searchParams.get("searchfor")=='string':undefined;
  //   let searchfor = searchParams.get('searchfor')!==null?searchParams.get('searchfor'):""
  //   if(!searchfor){
  //     searchfor=""
  //   }
  // console.log(ss)
  // console.log("hello world")
  // console.log(JSON.parse(gtr()))
  // console.log(dwc())
  // console.log("hello")
  // const { dark } = useContext(ThemeContext);

    return (
      <>
      {/* <ThemeProvider> */}
      {/* <div className={dark ? 'dark' : ''}> */}
      <div className="dark:bg-gray-900">
          <Search/>
          {/* <Homepage/> */}
          {/* <Planglist/> */}
          <OtherProjects searchfor={searchParams.searchfor}/>
          <Projects searchfor={searchParams.searchfor}/>
          <Ct/>
          {/* <Commits/> */}
          <Contactme/>
          <p className="text-center flex justify-center italic">This page was made using NextJS, React and Tailwind.</p>
      </div>

        {/* </div> */}
      {/* </ThemeProvider> */}
      </>

    );
  }