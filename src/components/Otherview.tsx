'use client'
import { useState } from "react"
import Modal from "./modal"
import { oCommits } from "../shared/types"
interface ovprops extends React.HTMLAttributes<HTMLDivElement> {
    ic:oCommits;
  }
export default function Otherview({ic}:ovprops){
    let [open,setopen]=useState(false)

    return(
        <div>
            <button aria-label="show more" onClick={()=>setopen(true)} className="relative right-0 bottom-0 text-blue-500 hover:text-blue-700">...</button>
        <Modal open={open} onclose={()=>setopen(false)} ic={ic}/>
        </div>
    )
}