import Reviews from "./reviews";
import '../../styles/globals.css'

export default function Ct(){
    return (
        <>
        <div className="block dark:bg-gray-900 dark:text-white">
        <div className="items-center leading-tighter tracking-tight  justify-center font-bold text-4xl p-10 pb-18">
        {/* <span className="bg-gray-300"> */}
         Here is what our users are saying about our products.
        {/* </span> */}
        </div>
        
        <Reviews/>
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