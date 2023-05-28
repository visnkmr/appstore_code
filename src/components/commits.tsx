// 'use client';

// import { useState } from "react";

   
// import StoreIcons from "./storeicons";
import LineClamp from "./LineClamp";
import dwc from "../dealcommits";
import Infiscrollcomp from "./infiscroll";
import Otherview from "./Otherview";
import Indicommit from "./indicommit";
export function appsfetcher() {
  // console.log(dwc().length)
  // var apps = await findLatestapps("projects");
  //  apps = await findLatestapps("projects/inp");
  return (
    <>
  {dwc("gtrl.json",5).map((ic) => {
      return ( 
        <Indicommit ic={ic}/>
      );
  })}
  </>
  );
}
export default function Commits() {
    // const [scroll, setScroll] = useState(false);
    return (
      <>
       <div className="p-2 flex flex-col items-center mt-20 w-full">
        <div className='text-center font-bold mb-5 leading-tighter tracking-tight md:px-0 md:text-[2.48rem] px-4 text-5xl m-15'>Products</div>
        <p className="text-gray-900 dark:text-slate-400 text-xl mb-8 text-center">
            {/* Our products have featured on most media outlets around the world, in most languages.  */}
            Recent commits from local Gitea instance, Codeberg.<br/> Except private repos other repo mirrors available on Github.
            </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

        {appsfetcher()}
        </div>
      </div>
      </>
    );
  }