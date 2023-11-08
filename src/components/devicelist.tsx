import Aas from "../stores/aas";
import Gp from "../stores/gp";
import Mas from "../stores/mas";

export default function DeviceList(k:{platformname:string |string[]}){
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
        
        <div className="">
        <p className="text-xs text-center"> *Should work on</p>
      {/* {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )}  */}
      {showwin && (
      <div className="flex justify-center">
      <p className="text-xs text-center"> Windows 10, Windows 11. </p>
    </div>
      )} 
      {showlx && (
      <div className="flex justify-center">
      <p className="text-xs text-center">Arch, Debian, Nix (Build from source), Ubuntu etc. </p>
    </div>
      )} 
      {showmos && (
      <div className="flex justify-center">
      <p className="text-xs text-center">Mac OS 14 Sonoma, Mac OS 13 Ventura. </p>
    </div>
      )} 
      {showaos && (
      <div className="flex justify-center">
        <p className="text-xs text-center">Android Phone, Tablets, Android TVs, Fire TVs, Fire Tablets, Windows Subsystem for Linux (WSL). </p>
      </div>
      )} 
      {/* {showmas && (
      <Mas/>
      )}  */}
      {/* {showgh && (
      <span className="flex items-center justify-center">
        <a 
        href="https://github.com/visnkmr" 
        rel="noopener" 
        target="_blank">
        Github
        </a>
      </span>
      )} */}
      </div>
        </>
    );
}