import React from "react";
import * as fs from 'node:fs';
import { join } from 'path';
import { Download, ExternalLink, Calendar, Tag } from "lucide-react";

import '../../styles/globals.css'
import Footer from "../../src/components/footer"
import DarkButton from "../../src/components/Themetogglebutton"
import { Providers } from "../../src/components/ThemeContext"
import PlatformList from "../../src/components/platformlist";
import StoreIcons from "../../src/components/storeicons";
import DeviceList from "../../src/components/devicelist";
import {asseturl} from "../../precompile/consturls"
import {open} from "../../precompile/makejsonfromfile"

export async function getStaticPaths() {
  await open();
  // Get the path to the JSON file
   // Get the path to the JSON file
   let data = 
//    fs.readFileSync(join(process.cwd(),"public","otherappslist.json"), 'utf-8');
// const others = JSON.parse(data);
// data = 
fs.readFileSync(join(process.cwd(),"public","list.json"), 'utf-8');
const apps = JSON.parse(data);
  //  const others = await fetch(
  //   asseturl+`otherappslist.json`
  // ).then((res) => res.json())
  // const apps = await fetch(
  //   asseturl+`list.json`
  //   // `https://cdn.jsdelivr.net/gh/visnkmr/appstore@add_search/src/projects/list.json`
  // ).then((res) => res.json())
  const products=[
    // ...others,
    ...apps];
  // Read the JSON file
  
  // Map over the array of objects and return their ids as paths
  const paths = products.map((item) => ({
    params: { title: item.title },
  }));
  // Return the paths and fallback option
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  // Get the path to the JSON file
  let data = 
//   fs.readFileSync(join(process.cwd(),"public","otherappslist.json"), 'utf-8');
// const others = JSON.parse(data);
// data = 
fs.readFileSync(join(process.cwd(),"public","list.json"), 'utf-8');
const apps = JSON.parse(data);
  const products=[
    // ...others,
    ...apps];
  // Find the object that matches the id
  data = products.find((item) => item.title === params.title);
  // Return the data as props
  return {
    props: {
      data,
    },
  };
}

export default function Details({ data }) {
    const app = data;

    return (
      <Providers>
        <div className="min-h-screen bg-background">
          <DarkButton showback={true} />

          {/* Professional Hero Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            <div className="absolute top-10 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center space-y-8 max-w-5xl mx-auto">
                {/* Enhanced App Icon */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-50"></div>
                    <img
                      src={asseturl + `images/${app.image}.png`}
                      alt={app.title}
                      className="relative app-image w-40 h-40 shadow-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="page-header gradient-text leading-tight">{app.title}</h1>
                  {app.description && (
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      {app.description}
                    </p>
                  )}
                </div>

                {/* Enhanced App Info */}
                <div className="flex flex-wrap justify-center gap-6 text-sm bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
                  {app.version && (
                    <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="font-medium">Version {app.version}</span>
                    </div>
                  )}
                  {app.lastupdated && (
                    <div className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">Updated {app.lastupdated}</span>
                    </div>
                  )}
                  {/* <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg">
                    <Download className="h-4 w-4 text-primary" />
                    <span className="font-medium">Professional App</span>
                  </div> */}
                </div>

                {/* Enhanced Download Button */}
                {app.downloadurl && (
                  <div className="flex justify-center">
                    <a
                      href={app.downloadurl}
                      className="download-button group shadow-2xl hover:shadow-primary/25"
                      rel="noopener"
                      target="_blank"
                    >
                      <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Download App
                      <ExternalLink className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
         {/* Screenshots Section */}
         {app.screenshot && app.screenshot.length > 0 && (
           <section className="py-16 bg-muted/30">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="section-title mb-8">Screenshots</h2>
               <div className="sliderpar">
                 <div className="slider">
                   {app.screenshot.map((image, index) => (
                     <img
                       key={index}
                       src={asseturl + image}
                       alt={`Screenshot ${index + 1}`}
                       className="screenshot-image slide"
                     />
                   ))}
                 </div>
               </div>
             </div>
           </section>
         )}

         {/* Enhanced YouTube Videos Section */}
         {app.youtube && app.youtube.length > 0 && (
           <section className="py-20">
             <div className="container mx-auto px-6 lg:px-8">
               <div className="text-center space-y-4 mb-16">
                 <h2 className="section-title gradient-text">Videos</h2>
                 <p className="text-muted-foreground max-w-2xl mx-auto">
                   Watch demonstrations and feature walkthroughs of the application.
                 </p>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                 {app.youtube.map((url, index) => (
                   <div key={index} className="aspect-video group">
                     <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                       <iframe
                         width="100%"
                         height="100%"
                         src={`https://www.youtube.com/embed/${url}`}
                         title={`YouTube video ${index + 1}`}
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         allowFullScreen
                         className="rounded-2xl group-hover:scale-105 transition-transform duration-300"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </section>
         )}

         {/* Articles Section */}
         {app.manualtext && app.manualtext.length > 0 && (
           <section className="py-16 bg-muted/30">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="section-title mb-8">Help Articles</h2>
               <div className="grid gap-4 max-w-2xl mx-auto">
                 {app.manualtext.map((helptexttitle, index) => (
                   <a
                     key={index}
                     href={app.manuallink[index]}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors group"
                   >
                     <span className="font-medium">{helptexttitle}</span>
                     <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 ))}
               </div>
             </div>
           </section>
         )}

         {/* Enhanced Platform Information */}
         <section className="py-20 bg-muted/30">
           <div className="container mx-auto px-6 lg:px-8">
             <div className="text-center space-y-4 mb-16">
               <h2 className="section-title gradient-text">Platform & Compatibility</h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 Comprehensive information about supported platforms, app stores, and compatible devices.
               </p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
               <div className="space-y-8">
                 <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                   <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                     <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                       <span className="text-primary font-bold text-sm">P</span>
                     </div>
                     <span>Supported Platforms</span>
                   </h3>
                   <PlatformList platformname={app.tags} />
                 </div>
               </div>

               <div className="space-y-8">
                 <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
                   <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                     <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                       <span className="text-primary font-bold text-sm">S</span>
                     </div>
                     <span>Available on Stores</span>
                   </h3>
                   <StoreIcons storename={app.tags} w={1} />
                 </div>
               </div>
             </div>

             <div className="mt-16">
               <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg max-w-4xl mx-auto">
                 <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
                   <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                     <span className="text-primary font-bold text-sm">D</span>
                   </div>
                   <span>Compatible Devices</span>
                 </h3>
                 <DeviceList platformname={app.tags} />
               </div>
             </div>
           </div>
         </section>

         <Footer />
       </div>
     </Providers>
   );
 }