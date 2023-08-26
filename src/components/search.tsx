"use client"

import React, { useEffect } from "react"
import { Input } from "../../components/ui/input"
import { useRouter } from "next/navigation"
import debounce from 'lodash.debounce';


const Search=()=>{
    const router=useRouter();
      const [ss, setss] = React.useState("")
    //   const debounced=debounce(()=>{ss},500);
      useEffect(()=>{
        // debounce(()=>{
            router.push(`/?searchfor=${ss}`)
            console.log(ss)
        // },500)
      },[ss,router])
    return (
        <div>

            <Input 
            className='m-5 w-[50%]' 
            value={ss}
            placeholder="Search.."
            onChange={(event) =>
                {
                  setss(event.target.value)
                  // || table.getColumn('reponame')?.setFilterValue(event.target.value)
                }
              }/>
        </div>
    )
}

export default Search;