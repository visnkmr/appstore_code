import Aas from "../stores/aas";
import Gp from "../stores/gp";
import Mas from "../stores/mas";

export default function StoreIcons(k:{storename:string |string[],w:number}){
    var showaas,showgps,showmas,showgh,showwin,showmos,showlx
    if(k.w===0 ){
        var storename=k.storename;
        showaas = false; 
        showgps =  false; 
        showmas =  false; 
        showgh =  false;
        showwin =  storename===('win');
        showlx =  storename===('lx');
        showmos =  storename===('mos');

    }
    else 
    if(Array.isArray(k.storename))
    {
        var tags=k.storename;
         showaas = false; 
         showgps = false; 
         showmas = false; 
         showgh =false;
         showwin =  tags.includes('win');
        showlx =  tags.includes('lx');
        showmos =  tags.includes('mos');
    }
    return (
        <>
        
        <div className="flex items-center justify-center">
      {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )} 
      {showwin && (
      <p className="border border-gray-300  m-3 p-2">Windows</p>
      )} 
      {showlx && (
      <p className="m-3 p-2 border border-gray-300 ">Linux</p>
      )} 
      {showmos && (
      <p className="m-3 p-2 border border-gray-300 ">Mac OS</p>
      )} 
      {/* {showmas && (
      <Mas/>
      )}  */}
      {showgh && (
      <span className="flex items-center justify-center">
        <a 
        href="https://github.com/visnkmr" 
        rel="noopener" 
        target="_blank">
        Github
        </a>
      </span>
      )}
      </div>
        </>
    );
}