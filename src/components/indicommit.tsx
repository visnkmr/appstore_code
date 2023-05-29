import { oCommits } from "../shared/types";
import Otherview from "./Otherview";
interface icprops extends React.HTMLAttributes<HTMLDivElement> {
  ic:oCommits
}

export default function Indicommit({ic}:icprops){
return (
    <div 
    // key={key} 
    className="mt-5 sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
      {/* <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div> */}
      <div className="text-center w-full">
      <a href={ic.commit} className="font-bold text-center m-4 break-all line-clamp-1 overflow-hidden direction-rtl">{ic.reponame}</a>
      {/* <LineClamp text={ic.message} lines={2} /> */}
      <div className={`line-clamp-2`}>{ic.message}</div>
      <Otherview ic={ic}/>

      {/* <p className="line-clamp-2 text-center">{content}</p> */}
      {/* <LineClamp text={ */}
      <div className="">
      <span className="text-green-500">

        {"(+) "+ic.additions.toString()}
      </span>
      <span className="text-rose-500">
      
        {" (-) "+ic.deletions.toString()}
      </span>  
      {/* <span>

        {" (Total) "+ic.total.toString()}
      </span> */}
      </div>
        {/* } className="font-bold text-center m-4"/> */}

      {/* <img src={image} className="w-32"/> */}
      {/* <StoreIcons storename={tags} w={1}/> */}
      <h5 className="line-clamp-2 font-bold text-center m-4">{ic.time}</h5>
      {/* <LineClamp className="font-bold text-center m-4" text={ic.reponame} lines={2}/> */}
      </div>
    </div>
)
}