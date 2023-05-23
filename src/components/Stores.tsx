import { Storelist } from "../shared/types";

export default function storeslist({stores}:Storelist){
    return (
        <>
        {stores.map(({ src, alt, link }, index) => (
            <div className="flex sm:w-auto">
                <a 
                className="w-full btn btn-primary sm:mb-0" 
                href={link} 
                rel="noopener" 
                target="_blank">
                    <img
                    src={src}
                    alt={alt}
                    className="h-8"
                    />
                </a>
            </div>
            ))}
        
        </>
    );
}
