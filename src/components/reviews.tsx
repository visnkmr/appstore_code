import { reviews } from "../shared/data";
import LineClamp from "./LineClamp";
import StoreIcons from "./storeicons";


export default function Reviews(){
    return (
        <>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
        {reviews.map(({ appname, review, storename }: { 
    appname: string, review: string, storename: string }) => {
      
      return ( 
    <div 
    key={storename} 
    className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 w-302 ">             
      {/* <div className="w-120 p-4">
          <img
          src={image}
          className="w-120 "/>
      </div> */}
      <div className="text-center w-full">
      <h3 className="font-bold text-center m-4">{appname}</h3>
      <LineClamp className="text-center" lines={2} text={review}/>
      {/* <h5 className="font-bold text-center m-4">{storename}</h5> */}

      {/* <img src={image} className="w-32"/> */}
      <StoreIcons{...{storename:storename,w:0}}/>
      </div>
    </div>
      );
  })}
        </div>
        </>
    );
}