"use client"

import React, { useEffect } from "react"
import { Input } from "../../components/ui/input"
import { useRouter } from "next/navigation"
import debounce from 'lodash.debounce';
import { useDebounce } from "use-debounce";


const Search=({change})=>{
    // const router=useRouter();
      const [ss, setss] = React.useState(change)
      const [debounced]=useDebounce(ss,500);
      // useEffect(()=>{
      //   // debounce(()=>{
      //       router.push(`/?searchfor=${debounced}`)
      //       console.log(debounced)
      //   // },500)
      // },[debounced,router])
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