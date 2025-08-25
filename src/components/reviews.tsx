import { apab, reviews } from "../shared/data";
import LineClamp from "./LineClamp";
import StoreIcons from "./storeicons";
import { Star, Quote } from "lucide-react";

export default function Reviews(){
    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Customer Reviews</h2>
                    <p className="text-muted-foreground">What our users are saying about our apps</p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={review.appname + index}
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
                        >
                            {/* App Name */}
                            <h3 className="font-semibold text-lg text-foreground mb-3 text-center">
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
                    ))}
                </div>
            </div>
        </div>
    );
}