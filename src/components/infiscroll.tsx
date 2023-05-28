


'use client'

import React, { useEffect, useState } from 'react';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List, Grid } from 'react-virtualized';
import 'react-virtualized/styles.css';
import dwc from '../dealcommits';
import '../../styles/infiscroll.css'
import '../../styles/globals.css'


import { appsfetcher } from './commits';
import LineClamp from './LineClamp';
import { oCommits } from '../shared/types';
// import { concat, slice } from 'lodash';
// import StoreIcons from './storeicons';
// // const rowCount = 5000;
// // const listHeight = 400;
// // const rowHeight = 200;
// // const rowWidth = 700;
// const columnCount=9;
// const columnWidth=300;

function Infiscrollcomp(a:{item: any}) {
const [columnCount, setcolcount] = useState(3);
if (typeof window !== 'undefined') {
  // return null; // exclude from server-side bundle
// }

  useEffect(()=>{
    // console.log(window.innerWidth/225)
  setcolcount(Math.max(Math.ceil(window.innerWidth/250),2));
  
  },[window.innerWidth])
  useEffect(() => {
    
  },[])
}
type CellRendererParams = {
  columnIndex: number;
  key: string;
  rowIndex: number;
  style: React.CSSProperties;
};
function cellRenderer({columnIndex, key, rowIndex, style}:CellRendererParams) {
  var post=
    rowIndex * columnCount+ columnIndex;
  if(post<a.item.length){

    const ic:oCommits = a.item[
      post
    ];
    var div=(a.item.length/columnCount);
    return (
      <div 
        style={style}
        key={key} 
        className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
      <div className="text-center w-full flex-row">
      <a href={ic.commit} className="font-bold text-center m-4">{ic.reponame}</a>
      <LineClamp text=
      {ic.message}
        lines={2} />

      <div className="font-bold text-center m-4">
      <div className="">
      <span className="text-green-500">

        {"(+) "+ic.additions.toString()}
      </span>
      <span className="text-rose-500">
      
        {" (-) "+ic.deletions.toString()}
      </span>  
      <span>

        {" (Total) "+ic.total.toString()}
      </span>
      </div>
      </div>

      <h5 className="line-clamp-2 font-bold text-center m-4">{ic.time}</h5>
      </div>
    </div>
    );
  }
  return (
    <>
    </>
  );
}
if (typeof window !== 'undefined') {
  // return null; // exclude from server-side bundle
// }

  // Render your grid
  return(
    <div>
      <div className='text-bold'>{a.item.length}</div>
      <Grid
        cellRenderer={cellRenderer}
        columnCount={columnCount}
        columnWidth={Math.ceil(window.innerWidth/columnCount)}
        height={window.innerHeight}
        overscanRowCount={1}
        overscanColumnCount={1}
        // height={window.innerHeight}
        rowCount={Math.ceil(a.item.length/columnCount)}
        rowHeight={300}
        width={window.innerWidth}
        // width={columnCount*columnWidth}
      />
    </div>
    // document.getElementById('example'),
  );
}
else{
  return(
    <>
    </>
  );
}
}

export default Infiscrollcomp;