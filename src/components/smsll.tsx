//showmoreshowlesslist
'use client'

import React, { useEffect, useState } from 'react';
import { AutoSizer, CellMeasurer, CellMeasurerCache, Grid, List } from 'react-virtualized';
import 'react-virtualized/styles.css';
import dwc from '../dealcommits';
// import '../../styles/infiscroll.css'
import '../../styles/globals.css'


import { appsfetcher } from './commits';
import LineClamp from './LineClamp';
import { oCommits } from '../shared/types';
import { concat, slice } from 'lodash';
import { MeasuredCellParent } from 'react-virtualized/dist/es/CellMeasurer';
const rowCount = 5000;
const listHeight = 400;
const rowHeight = 200;
const columnWidth = 225;
// const columnCount=3;

function Smsll(a:{item: any}) {
//   const [page, setPage] = useState(1);

//   function loadMore() {
//     setPage(page + 1);
//   }

//   function rowRenderer({ index, key, style } ) {
//     const ic = list[index];
//     return (
//         <div key={key} style={style}>
//         {/* <div className="content"> */}
//           {/* {a.item.slice(0, page * 4).map((ic) => ( */}
//             <div 
//               className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
//                 {/* <div className="w-120 p-4">
//                     <img
//                     src={image}
//                     className="w-120 "/>
//                 </div> */}
//                 <div className="text-center w-full">
//                 <a href={ic.commit} className="font-bold text-center m-4">{ic.reponame}</a>
//                 <LineClamp text={ic.message} lines={2} />

//                 {/* <p className="line-clamp-2 text-center">{content}</p> */}
//                 <LineClamp text={"(+) "+ic.additions.toString()+" (-) "+ic.deletions.toString()+" (Total) "+ic.total.toString()} className="font-bold text-center m-4"/>

//                 {/* <img src={image} className="w-32"/> */}
//                 {/* <StoreIcons storename={tags} w={1}/> */}
//                 {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
//                 {/* <LineClamp className="font-bold text-center m-4" text={ic.reponame} lines={2}/> */}
//                 </div>
//               </div>
//           {/* ))} */}
//         {/* </div> */}
//       </div>

//     );
//   }

const [columnCount, setcolcount] = useState(3);
if (typeof window !== 'undefined') {

  useEffect(()=>{
    // console.log(window.innerWidth/225)
  setcolcount(Math.max(Math.ceil(window.innerWidth/250),2));

  },[window.innerWidth])
// }
const [showMore, setShowMore] = useState(true);
const [showLess, setShowLess] = useState(false);
const [index, setIndex] = useState(1);
const [list, setList] = useState(slice(a.item, 0, index));
  const LENGTH = a.item.length;
  const cache = new CellMeasurerCache({
    // fixedWidth: true,
    defaultWidth:columnWidth,
    defaultHeight: rowHeight
  });
  type CellRendererParams = {
    columnIndex: number;
    key: string;
    rowIndex: number;
    style: React.CSSProperties;
    parent: MeasuredCellParent
  };
function rowRenderer({ columnIndex, key, rowIndex, style, parent }:CellRendererParams ) {
  var post=
  rowIndex * columnCount+ columnIndex;
  if(post<a.item.length){
    // console.log(JSON.stringify(list[post]))
    const ic:oCommits = list[post] as oCommits;
      if(typeof(ic)!=="undefined")
      return (
          

          <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={columnIndex}
        rowIndex={rowIndex}>
        {({registerChild}) => (
          <div
          style={style}
          >
          <div 
      // key={ic.time} 
      className=" sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
        {/* <div className="w-120 p-4">
            <img
            src={image}
            className="w-120 "/>
        </div> */}
        <div className="text-center w-full">
        <a href={ic.commit} className="font-bold text-center m-4">{ic.reponame}</a>
        <LineClamp text=
        {ic.message}
          lines={2} />

        {/* <p className="line-clamp-2 text-center">{content}</p> */}
        {/* <LineClamp text= */}
        {"(+) "+ic.additions.toString()+" (-) "+ic.deletions.toString()+" (Total) "+ic.total.toString()} 
        {/* className="font-bold text-center m-4"/> */}

        {/* <img src={image} className="w-32"/> */}
        {/* <StoreIcons storename={tags} w={1}/> */}
        <h5 className="line-clamp-2 font-bold text-center m-4">{ic.time}</h5>
        {/* <LineClamp className="font-bold text-center m-4" text={ic.reponame} lines={2}/> */}
        </div>
      </div>
        </div>
        )}
        </CellMeasurer>
        
      );
  }
  return (
    <>
    </>
  );
  }
  
  const loadMore = () => {
    const newIndex = index + 1;
    const newShowMore = newIndex < LENGTH-1;
    const newShowLess = newIndex > 1;
    const nextItem = a.item[newIndex];
    const newList = concat(list, nextItem);
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
    setShowLess(newShowLess);
  };
  const loadLess = () => {
    const newIndex = index - 1;
    const newShowMore = newIndex < LENGTH-1;
    const newShowLess = newIndex > 1;
    const newList = slice(list, 0, newIndex);
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
    setShowLess(newShowLess);
  };
// if (typeof window !== 'undefined') {

  return (
    
    // <div className=''>
     <div className=' '>
      <p>{list.length}</p>
         {showMore && <button className='shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 rounded-full place-self-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={loadMore}>Load More</button>}
     {showLess && <button className='shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 rounded-full place-self-center hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={loadLess}>Load Less</button>}
     <AutoSizer>
    {({ width, height }) => (
    <Grid
        width={window.innerWidth}
        // height={300}
        columnCount={columnCount}
        columnWidth={Math.ceil(window.innerWidth/columnCount)}
        height={400}
        // height={index*rowHeight}
        // height={height}
        // width={300}
        deferredMeasurementCache={cache}
        // rowHeight={rowHeight}
        rowHeight={cache.rowHeight}
        cellRenderer={rowRenderer}
        rowCount={Math.ceil(index/columnCount)}
        overscanRowCount={1}
        overscanColumnCount={1}
    />
    )}
    </AutoSizer>
     
  </div>
  );
}
return(
  <>
  <div>
    <p></p>
  </div>
  </>
);
}

export default Smsll;