'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Badge } from "../../components/ui/badge"

import '../../styles/globals.css'
import App from "next/app";
import { asseturl } from "../../precompile/consturls";
import { Laptop, PcCase, Phone, Smartphone, Tv } from "lucide-react";
type valsofapp={
  app:any
}
export default function Llimage({app}:valsofapp){
  // console.log(version)
    return(
        <>
        {/* <img src={url} className="w-full object-contain flex justify-center rounded-2xl " style={{ marginTop: '-15px' }}/> */}
        {/* <img  src={url} className="img-box-papp w-32 dark:border-4 border-0 border-gray-600" aria-label={label}/> */}
        <div className="flex m-4">
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
        <div className="flex flex-row ">
          {/* url={} label={app.title} version={app.version} */}

        <img  src={asseturl+`/images/${app.image}.png`} className="img-box-papp w-24 h-24 dark:border-2 border-0 border-gray-600 " aria-label={app.title}/>
        <div className="ps-4 ">
          <p className="">{app.title}</p>
          <span className="text-slate-400 hover:text-slate-500">

          <div className="flex flex-row ">
          {app.download?(<><p className="text-sm ">{app.download}</p>
  <p className="text-sm ps-1 pe-1">•</p></>):null}
          <p className="text-sm">Free</p>
          {((app.tags).includes('aas')||(app.tags).includes('gp'))?(<Smartphone className="ms-2 h-5 w-5"/>):null}
          {((app.tags).includes('pc')||(app.tags).includes('win'))?(<Laptop className="ms-2 h-5 w-5"/>):null}
          {((app.tags).includes('aas')||(app.tags).includes('gp'))?(<Tv className="ms-2 h-5 w-5"/>):null}
          </div>
          <p className="text-sm line-clamp-2">{app.description?app.description:app.content}</p>
          </span>
        </div>
        </div>
      </div>
    </div>

        </>
    );
}



