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
        
        <div className="flex justify-center">
        <div className="slider p-5">
          
      {/* {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )}  */}
      {showwin && (
      <p className="eachplatform">Windows</p>
      )} 
      {showlx && (
      <p className="eachplatform ">Linux</p>
      )} 
      {showmos && (
      <p className="eachplatform">Mac OS</p>
      )} 
      {showaos && (
        <>
        <>
      <p className="eachplatform ">Android</p>
      <p className="eachplatform ">Graphene OS</p>
      <p className="eachplatform ">AOSP</p>
      <p className="eachplatform ">Fire OS</p>
      </>
      {/* <div>
        <p className="text-xs">Should work on Android Phone, Tablets, Android TVs, Fire TVs, Fire Tablets, Windows Subsystem for Linux (WSL). </p>
      </div> */}
      </>
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
      </div>
        </>
    );
}