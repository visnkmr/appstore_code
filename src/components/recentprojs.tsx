'use client'
import Marquee from "react-fast-marquee";
import Workinp from "./wip";

export default async function recentprojs(){
    return(
        <>
        <div className="w-full">
            <noscript>
                {await Workinp()}
            </noscript>
            <Marquee pauseOnHover>

              {await Workinp()}
            </Marquee>
          </div>
        </>
    )
}