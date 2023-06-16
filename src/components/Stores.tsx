import { Storelist } from "../shared/types";

export default function storeslist({stores}:Storelist){
    return (
        <>
        <div className="flex flex-row">

        {stores.map((store) => (
            <div className="pr-4 h-7 sm:h-10">
                <a 
                className="btn btn-primary sm:mb-0" 
                href={store.link} 
                rel="noopener" 
                target="_blank">
                    <img
                    src={store.src}
                    alt={store.alt}
                    className="h-full object-contain"
                    />
                </a>
            </div>
            ))}
        </div>
        
        </>
    );
}
