import React from "react";
import ScrollText from "./ScrollText";
import Lightbulb from "./Lightbulb";

export default function Topthread(){
    return(
        <>
        {/* <ScrollText text="This is a scrolling text.This is a scrolling text." speed={20} /> */}
        
        <section className="flex dark:bg-slate-800 bg-blue-50">
            <div className="sm:flex hidden font-medium px-4 max-w-6xl mx-auto py-4 sm:px-6 text-center text-md text-white">
            <Lightbulb/><a className="ps-4" href={"https://github.com/visnkmr/iomer"}>
                <span className="font-bold">Iomer:</span> A simple, High Performance file explorer built in rust for PC.
                </a>
            </div>
        </section>
        </>

    );
}