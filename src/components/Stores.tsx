import { Storelist } from "../shared/types";

export default function storeslist({stores}:Storelist){
    return (
        <>
        {stores.map((store) => (
            <div className="flex sm:w-auto">
                <a 
                className="w-full btn btn-primary sm:mb-0" 
                href={store.link} 
                rel="noopener" 
                target="_blank">
                    <img
                    src={store.src}
                    alt={store.alt}
                    className="h-8"
                    />
                </a>
            </div>
            ))}
        
        </>
    );
}
