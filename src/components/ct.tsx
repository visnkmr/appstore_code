'use client'
import Reviews from "./reviews";
import '../../styles/globals.css'
import Mq from "./mq";
import CountUp from "react-countup";

export default function Ct(){
    return (
        <div className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
            <div className="absolute top-0 left-1/4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10">
                {/* Modern Statistics Section */}
                <div className="text-center mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Reviews Count */}
                        <div className="group">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="font-bold text-5xl lg:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                        150k+
                                    </div>
                                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Reviews</p>
                                </div>
                            </div>
                        </div>

                        {/* Sessions Count */}
                        <div className="group">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <div className="font-bold text-5xl lg:text-6xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                                        15M+
                                    </div>
                                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Sessions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                        What Our Users Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"></div>
                </div>

                {/* Reviews Section */}
                <div>
                    <noscript>
                        {showlistorscroll(0)}
                    </noscript>
                    {showlistorscroll(1)}
                </div>

                {/* Modern CTA Button */}
                <div className="flex justify-center">
                    <a
                        href="https://www.amazon.com/gp/mas/dl/android?p=io.github.visnkmr.bapl&showAll=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center space-x-2">
                            <span>Explore More Reviews</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export function showlistorscroll(whichone:number){
    if(whichone===1)return (
      <>
      <div 
      className="flex flex-row"
      >

    {Mq(1)}
      </div>
      </>

    );
    return (
      <>
        <Reviews/>
      </>

    )
  }