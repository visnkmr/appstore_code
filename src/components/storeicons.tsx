import Aas from "../stores/aas";
import Gp from "../stores/gp";
import Mas from "../stores/mas";

export default function StoreIcons(k:{storename:string |string[],w:number}){
    var showaas,showgps,showmas,showgh,showwin,showmos,showlx
    if(k.w===0 ){
        var storename=k.storename;
        showaas = storename==='aas'; 
        showgps =  storename===('gp'); 
        showmas =  storename===('ms'); 
        showgh =  storename===('gh');
        showwin =  storename===('win');
        showlx =  storename===('lx');
        showmos =  storename===('mos');

    }
    else 
    if(Array.isArray(k.storename))
    {
        var tags=k.storename;
         showaas = tags.includes('aas'); 
         showgps = tags.includes('gp'); 
         showmas = tags.includes('ms'); 
         showgh = tags.includes('gh');
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