'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Badge } from "../../components/ui/badge"

import '../../styles/globals.css'
export default function Llimage({url,label}){
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        {/* <img  src={url} className="img-box-papp w-32 dark:border-4 border-0 border-gray-600" aria-label={label}/> */}
        <div className="flex justify-center">
      <div className="overflow-hidden relative">
        <Badge className="absolute top-2 right-2 z-10">
          {label}
        </Badge>
        {/* <img 
          src={imageUrl} 
          alt={altText}
          className="w-full max-w-md object-cover flex justify-center rounded-2xl"
        /> */}
        <img  src={url} className="img-box-papp w-32 dark:border-4 border-0 border-gray-600" aria-label={label}/>
      </div>
    </div>

        </>
    );
}



