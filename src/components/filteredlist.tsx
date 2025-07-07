// 'use client'
import React, { useState, useMemo, useEffect } from 'react';
import { findLatestapps } from '../posts';
import { indiotherproj } from './printindiproj';
import { useDebounce } from 'use-debounce';
import { Input } from '../../components/ui/input';

function FilteredList({appst}) {


    // var apps;
    // const [apps,setapps]=useState([])
    // useEffect(() => {
    //     const trasy = async () => {
    //         let appst = await findLatestapps("list.json");
    //         console.log("here" + appst);
    //         setapps(appst);
    //     };
    //     trasy();
    //  }, []);
    //  useEffect(() => {
    //     console.log("new"+apps);
    //  }, [apps]);
     
    
    console.log("here4----->"+appst)


 const initialList = appst;
 console.log("list now is ----->"+initialList)
 const [filter, setFilter] = useState('');

 const filteredList = useMemo(() => {
    if(filter.trim().length>1){
        console.log("condition1")

        return initialList.filter(item=>item.image).filter(app => app.title.toLowerCase().includes(filter.toLowerCase()) || app.content.toLowerCase().includes(filter.toLowerCase()));
    }
    else{
        console.log("condition2")

        return initialList.filter(item=>item.image)
    }
 }, [filter,initialList]);

 return (
   <div>
    <div className='flex justify-center'>

    <Input 
        className='m-5 w-[50%]' 
        value={filter}
        placeholder="Search.."
        onChange={(event) =>
            {
              setFilter(event.target.value)
              // || table.getColumn('reponame')?.setFilterValue(event.target.value)
            }
          }/>
    </div>
         <div className="sm:m-4 lg:m-20 box dark:bg-gray-900 dark:text-white">
       {filteredList.map((item, index) => (
         indiotherproj(item)
       ))}
     </div>
   </div>
 );
}

export default FilteredList;