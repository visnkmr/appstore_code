import Reviews from "./reviews";
import '../../styles/globals.css'
import Mq from "./mq";

export default function Ct(){
    return (
        <>
        <div className="block dark:bg-gray-900 dark:text-white">
        <div className="text-center md:mb-0 ">
          <div className="font-bold font-heading text-4xl lg:text-5xl text-[#039de1] xl:text-6xl">
            150k+
            </div>
          <p className="text-sm dark:text-slate-400 font-medium lg:text-base text-gray-800 tracking-widest uppercase">Reviews</p>
        </div>
        {/* <div className="mx-5 h-12 w-1 dark:border-slate-200 ">

        </div>
        <div className="text-center dark:md:border-slate-500">
          <div className="font-bold lg:text-5xl text-4xl text-[#039de1] xl:text-6xl">15M+</div>
          <p className="text-sm dark:text-slate-400 font-medium lg:text-base text-gray-800 tracking-widest uppercase">sessions</p>
        </div> */}
        <div className="items-center leading-tighter tracking-tight  justify-center font-bold text-4xl p-10 pb-18">
        {/* <span className="bg-gray-300"> */}
         Here is what our users are saying about our products.
        {/* </span> */}
        </div>
        
        <noscript>
            {showlistorscroll(0)}
        </noscript>
            {showlistorscroll(1)}
        <div
        className="flex w-full justify-center items-center">

        <a
        href="https://www.amazon.com/gp/mas/dl/android?p=io.github.visnkmr.bapl&showAll=1"
        target="_blank"
        className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 rounded-full place-self-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">Checkout more</a>
        </div>
        </div>
        </>
    );
}
export function showlistorscroll(whichone:number){
    if(whichone===1)return (
      <>
      <div 
      className="flex flex-row"
      >

    {Mq(1)}
      </div>
      </>

    );
    return (
      <>
        <Reviews/>
      </>

    )
  }