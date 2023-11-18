'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import '../../styles/globals.css'
export default function Llimage({url,label}){
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        <LazyLoadImage  src={url} className="img-box-papp w-32 rounded-2xl ml-1 mr-1 mt-1 mb-1" aria-label={label}/>

        </>
    );
}



