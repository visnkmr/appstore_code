'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Badge } from "../../components/ui/badge"

import '../../styles/globals.css'
type valsofapp={
  url:string,
  label:string,
  version:string
}
export default function Llimage({url,label,version}:valsofapp){
  // console.log(version)
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        {/* <img  src={url} className="img-box-papp w-32 dark:border-4 border-0 border-gray-600" aria-label={label}/> */}
        <div className="flex justify-center hover:text-white">
      <div className="overflow-hidden relative ">
        {/* {
          version && version.length>0? <Badge className="absolute top-2 right-2 z-10 bg-black ">
          {version}
        </Badge>:""
        } */}
        {/* <img 
          src={imageUrl} 
          alt={altText}
          className="w-full max-w-md object-cover flex justify-center rounded-2xl"
        /> */}
        <img  src={url} className="img-box-papp w-32 dark:border-4 border-0 border-gray-600 " aria-label={label}/>
      </div>
    </div>

        </>
    );
}



