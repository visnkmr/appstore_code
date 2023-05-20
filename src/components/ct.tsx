import Reviews from "./reviews";

export default function Ct(){
    return (
        <>
        <div className="block">
        <div className="items-center leading-relaxed justify-center font-bold text-4xl m-20">
        {/* <span className="bg-gray-300"> */}
         Here is what our users are saying about our products.
        {/* </span> */}
        </div>
        <Reviews/>
        </div>
        </>
    );
}