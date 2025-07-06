import Marquee from "react-fast-marquee";
import Reviews from "./reviews";
import LineClamp from "./LineClamp";
import StoreIcons from "./storeicons";
import { apab, reviews } from "../shared/data";
import indireview from "./indireview";
import { appsfetcher } from "./commits";
import dwc from "../dealcommits";
import Indicommit from "./indicommit";
import take from "lodash.take";


export default function Mq(fromwhere:number){
    if(fromwhere===1){
        return(
            <div className="grid sm:grid-cols-2 xl:grid-cols-8 pt-5">
                {reviews.map((review) => {
                    return indireview(review);
                })}
            </div>
        )
    }
    else{
        return(
            <Marquee pauseOnHover direction="left" className="pt-5">   
             
                {/* {appsfetcher()} */}
                {dwc("gtrl.json",5).map((ic) => {
                    return ( 
                        <Indicommit ic={ic}/>
                        // <div className="text-bold">
                        //     {ic.reponame}
                        // </div>
                    );
                })}
            </Marquee>
        );
    }
}
