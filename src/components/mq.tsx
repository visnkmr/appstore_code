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
            <Marquee pauseOnHover direction="left" className="pt-5">
                {/* <div className="text-bold pe-4 text-4xl ps-20">Recently updated:</div>
                <div className="text-bold pe-4 text-4xl">Background apps and Process List || </div>
                <div className="text-bold pe-4 text-4xl">Hello|| </div>
                <div className="text-bold pe-4 text-4xl">Hello|| </div>
                <div className="text-bold pe-4 text-4xl">Hello|| </div>
                <div className="text-bold pe-4 text-4xl">Hello|| </div> */}
              {/* <Reviews/> */}
              {/* <div   
                // key={review.} 
                className="sm:flex shadow-indigo-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-2xl col-span-1 mx-5 xl:mx-4 mb-8  p-4 w-302 ">              */}
                {/* <div className="w-120 p-4">
                    <img
                    src={image}
                    className="w-120 "/>
                </div> */}
    
                {/* {take(reviews,5).map((review) => { */}
                {reviews.map((review) => {
                    return indireview(review);
                })}
                {/* </div> */}
    
            </Marquee>
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