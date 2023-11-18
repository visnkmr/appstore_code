'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import '../../styles/globals.css'
export default function Llimage({url,label}){
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        <LazyLoadImage  src={url} className="img-box-papp w-32" aria-label={label}/>

        </>
    );
}



