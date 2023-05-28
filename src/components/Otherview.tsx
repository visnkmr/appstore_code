'use client'
import { useState } from "react"
import Modal from "./modal"

export default function Otherview({ic}){
    let [open,setopen]=useState(false)

    return(
        <div>
            <button onClick={()=>setopen(true)} className="relative right-0 bottom-0 text-blue-500 hover:text-blue-700">...</button>
        <Modal open={open} onclose={()=>setopen(false)} ic={ic}/>
        </div>
    )
}