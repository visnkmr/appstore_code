


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
import Indicommit from './indicommit';
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

  // useEffect(()=>{
  //   // console.log(window.innerWidth/225)
  // setcolcount(Math.max(Math.ceil(window.innerWidth/250),2));
  
  // },[window.innerWidth])
  // useEffect(() => {
    
  // },[])
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
        > 
        <Indicommit ic={ic}/>            
      
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