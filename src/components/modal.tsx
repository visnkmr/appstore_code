import { oCommits } from "../shared/types";

interface modalprops extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onclose: ()=>void;
    ic:oCommits
  }
export default function Modal({open,onclose,ic}:modalprops){
    return(
        
        <div onClick={onclose} 
        className=        {`fixed inset-0 flex justify-center items-center transition-colors ${open?"visible bg-white/100 dark:bg-gray-900/100":"invisible" } `}
        >
            <button onClick={onclose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">x</button>
            <div 
            // key={ic.time} 
            className="w-60vh sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 ">             
            {/* <div className="w-120 p-4">
                <img
                src={image}
                className="w-120 "/>
            </div> */}
            
            <div onClick={e=>e.stopPropagation()}
            className="">
            <a href={ic.commit} className="font-bold text-center m-4 break-all">{ic.reponame}</a>
            <div>
                {ic.message}
                
                </div> 

            {/* <p className="line-clamp-2 text-center">{content}</p> */}
            {/* <LineClamp text={ */}
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
                {/* } className="font-bold text-center m-4"/> */}

            {/* <img src={image} className="w-32"/> */}
            {/* <StoreIcons storename={tags} w={1}/> */}
            <h5 className="line-clamp-2 font-bold text-center m-4">{ic.time}</h5>
            {/* <LineClamp className="font-bold text-center m-4" text={ic.reponame} lines={2}/> */}
            <button onClick={onclose} className="p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">Close</button>
            </div>
            
            </div>
        </div>
    )
}