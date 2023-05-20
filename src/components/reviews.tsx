import { reviews } from "../shared/data";
import Aas from "../stores/aas";
import Gp from "../stores/gp";
import Mas from "../stores/mas";

export default function Reviews(){
    return (
        <>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
        {reviews.map(({ appname, review, storename }: { 
    appname: string, review: string, storename: string }) => {
      const showaas = storename==='aas'; 
      const showgps =  storename===('gp'); 
      const showmas =  storename===('ms'); 
      const showgh =  storename===('gh');
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
      <p className="line-clamp-4 text-center">{review}</p>
      <h5 className="font-bold text-center m-4">{storename}</h5>

      {/* <img src={image} className="w-32"/> */}
      <div className="flex items-center justify-center">
      {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )} 
      {showmas && (
      <Mas/>
      )} 
      {showgh && (
      <span className="flex items-center justify-center">
        Github
      </span>
      )}
      </div>
      </div>
    </div>
      );
  })}
        </div>
        </>
    );
}