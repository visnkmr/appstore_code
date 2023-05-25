'use client'

import React, { useState } from 'react';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';
import 'react-virtualized/styles.css';
import dwc from '../dealcommits';
import '../../styles/infiscroll.css'


import { appsfetcher } from './commits';
import LineClamp from './LineClamp';
import { oCommits } from '../shared/types';
import { concat, slice } from 'lodash';
const rowCount = 5000;
const listHeight = 400;
const rowHeight = 200;
const rowWidth = 700;

function Infiscrollcomp(a:{item: any}) {
  const [page, setPage] = useState(1);

//   function loadMore() {
//     setPage(page + 1);
//   }

//   function rowRenderer({ index, key, style } ) {
//     const ic = a.item[index];
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

const [showMore, setShowMore] = useState(true);
const [showLess, setShowLess] = useState(false);
  const [list, setList] = useState(slice(a.item, 0, 1));
  const [index, setIndex] = useState(1);
  const LENGTH = a.item.length;
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: rowHeight
  });
function rowRenderer({ index, key, style, parent } ) {
    const ic = list[index];
    return (
        <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}>
      {({registerChild}) => (
        <div key={key} style={style}>
        {/* <div className="content"> */}
          {/* {a.item.slice(0, page * 4).map((ic) => ( */}
            <div 
              className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
                {/* <div className="w-120 p-4">
                    <img
                    src={image}
                    className="w-120 "/>
                </div> */}
                <div className="text-center w-full">
                {/* <a href={ic.commit} className="font-bold text-center m-4">{ic.reponame}</a> */}
                <LineClamp text={ic.title} lines={2} />
          
                {/* <p className="line-clamp-2 text-center">{content}</p> */}
                <LineClamp text={ic.content} className="font-bold text-center m-4"/>
          
                {/* <img src={image} className="w-32"/> */}
                {/* <StoreIcons storename={tags} w={1}/> */}
                {/* <h5 className="line-clamp-2 font-bold text-center m-4">{download}</h5> */}
                {/* <LineClamp className="font-bold text-center m-4" text={ic.reponame} lines={2}/> */}
                </div>
              </div>
          {/* ))} */}
        {/* </div> */}
      </div>
      )}
      </CellMeasurer>
      
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
    const nextItem = a.item[newIndex];
    const newList = concat(list, nextItem);
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
    setShowLess(newShowLess);
  };

  return (
    
    <div className=' grid grid-cols-4'>
        {showMore && <button onClick={loadMore}>Load More</button>}
     {showLess && <button onClick={loadLess}>Load Less</button>}
     <AutoSizer>
    {({ width, height }) => (
    <List
        width={window.innerWidth}
        height={Math.min(rowHeight*index,window.innerHeight)}
        // width={width}
        // height={height}
        deferredMeasurementCache={cache}
        rowHeight={cache.rowHeight}
        rowRenderer={rowRenderer}
        rowCount={index}
        overscanRowCount={1} />
    )}
    </AutoSizer>
     
  </div>
  );
}

export default Infiscrollcomp;