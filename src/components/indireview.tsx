import { apab } from "../shared/data";
import { review } from "../shared/types";
import LineClamp from "./LineClamp";
import StoreIcons from "./storeicons";
import { Star, Quote } from "lucide-react";

export default function indireview(review:review){
    // Create a simple hash for consistent tilt based on appname
    const getTiltClass = () => {
        const hash = review.appname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];
        return tilts[hash % tilts.length];
    };

    return (
        <div className={`min-h-[15rem] w-72 mx-4 transform transition-all duration-300 hover:scale-105 ${getTiltClass()}`}>
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 overflow-hidden h-full">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center opacity-60">
                    <Quote className="h-4 w-4 text-primary" />
                </div>

                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

                <div className="relative z-10">
                    {/* App Name */}
                    <h3 className="font-bold text-lg text-foreground mb-3 text-center">
                        {apab.get(review.appname)!}
                    </h3>

                    {/* Review Text */}
                    <div className="mb-4">
                        <LineClamp
                            className="text-muted-foreground leading-relaxed text-center text-sm"
                            lines={3}
                            text={review.review}
                        />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                            <Star
                                key={starIndex}
                                className="h-4 w-4 text-yellow-400 fill-current"
                            />
                        ))}
                    </div>

                    {/* Store Icons */}
                    <div className="flex justify-center">
                        <StoreIcons {...{storename: review.storename, w: 0}} />
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </div>
    );
}