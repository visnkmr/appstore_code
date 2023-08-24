'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Llimage({url}){
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        <LazyLoadImage  src={url} className=" w-32 object-contain flex justify-center rounded-2xl " />

        </>
    );
}