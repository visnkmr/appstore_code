'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import '../../styles/globals.css'
export default function Llimage({url,label}){
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        <img  src={url} className="img-box-papp w-32 dark:border-4 border-0 border-gray-600" aria-label={label}/>

        </>
    );
}



