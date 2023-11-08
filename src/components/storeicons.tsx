import Aas from "../stores/aas";
import Gp from "../stores/gp";
import Mas from "../stores/mas";

export default function PlatformList(k:{platformname:string |string[]}){
    var showaas,showgps,showmas,showgh,showwin,showmos,showlx,showaos
    // if(k.w===0 ){
    //     var platformname=k.platformname;
    //     showaas = false; 
    //     showgps =  false; 
    //     showmas =  false; 
    //     showgh =  false;
    //     showwin =  platformname===('win');
    //     showlx =  platformname===('lx');
    //     showmos =  platformname===('mos');

    // }
    // else 
    if(Array.isArray(k.platformname))
    {
        var tags=k.platformname;
         showaas = false; 
         showgps = false; 
         showmas = false; 
         showgh =false;
         showwin =  tags.includes('win');
        showlx =  tags.includes('lx');
        showaos =  tags.includes('aos');
        showmos =  tags.includes('mos');
    }
    return (
        <>
        
        <div className="flex items-center justify-center">
      {/* {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )}  */}
      {showwin && (
      <p className="border border-gray-300  m-3 p-2">Windows</p>
      )} 
      {showlx && (
      <p className="m-3 p-2 border border-gray-300 ">Linux</p>
      )} 
      {showmos && (
      <p className="m-3 p-2 border border-gray-300 ">Mac OS</p>
      )} 
      {showaos && (
        <div>
        <div className="flex justify-center">
      <p className="m-3 p-2 border border-gray-300 ">Android</p>
      <p className="m-3 p-2 border border-gray-300 ">Graphene OS</p>
      <p className="m-3 p-2 border border-gray-300 ">AOSP</p>
      <p className="m-3 p-2 border border-gray-300 ">Fire OS</p>
      </div>
      {/* <div>
        <p className="text-xs">Should work on Android Phone, Tablets, Android TVs, Fire TVs, Fire Tablets, Windows Subsystem for Linux (WSL). </p>
      </div> */}
      </div>
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