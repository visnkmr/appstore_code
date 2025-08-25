'use client'

import { Badge } from "../../components/ui/badge"
import '../../styles/globals.css'
import { asseturl } from "../../precompile/consturls";
import { Laptop, Smartphone, Tv, Download, Star } from "lucide-react";
import Link from "next/link";

interface AppData {
  title: string;
  content: string;
  description?: string;
  image: string;
  download?: string;
  version?: string;
  tags: string;
  downloadurl?: string;
}

interface LlimageProps {
  app: AppData;
}

export default function Llimage({ app }: LlimageProps) {
   const getPlatformIcon = () => {
     if (app.tags.includes('gp') || app.tags.includes('aas')) {
       return <Smartphone className="h-5 w-5" />;
     }
     if (app.tags.includes('pc') || app.tags.includes('win')) {
       return <Laptop className="h-5 w-5" />;
     }
     if (app.tags.includes('tv')) {
       return <Tv className="h-5 w-5" />;
     }
     return <Smartphone className="h-5 w-5" />;
   };

   const getPlatformName = () => {
     if (app.tags.includes('gp')) return 'Android';
     if (app.tags.includes('aas')) return 'Fire TV';
     if (app.tags.includes('pc') || app.tags.includes('win')) return 'Windows';
     return 'Mobile';
   };

   const getPlatformColor = () => {
     if (app.tags.includes('gp')) return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
     if (app.tags.includes('aas')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
     if (app.tags.includes('pc') || app.tags.includes('win')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
     return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
   };

   return (
     <div className="app-card p-4 group hover:shadow-2xl hover:shadow-primary/20 duration-300 block focus:outline-none focus:ring-1 focus:ring-primary/20 rounded-xl relative">
       <Link
         href={`/appstore/details/${app.title}`}
         className="block"
         aria-label={`View details for ${app.title} app`}
       >
         <div className="flex items-start space-x-4">
           {/* App Icon */}
           <div className="flex flex-col space-y-2 place-items-center">
             <img
               src={asseturl + `/images/${app.image}.png`}
               alt={`${app.title} app icon`}
               className="w-16 h-16 rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300"
               loading="lazy"
             />
             <div className="abdsolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity uration-300"></div>
              <div className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium ${getPlatformColor()}`}>
                   {getPlatformIcon()}
                   <span>{getPlatformName()}</span>
                 </div>
           </div>

           {/* App Details */}
           <div className="flex-1 min-w-0">
             <h3 className="font-semibold text-base text-foreground  line-clamp-1 mb-1">
               {app.title}
             </h3>

             <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-1">
               {app.description || app.content}
             </p>

             {/* Platform and Meta Info */}
             <div className="flex items-center justify-between">
               <div className="flex items-center space-x-2">
                

                 {app.version && (
                   <span className="text-xs text-muted-foreground">
                     v{app.version}
                   </span>
                 )}
               </div>

               <div className="flex items-center space-x-1">
                 <div className="platform-tag bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800">
                   Free
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Link>

       {/* Download Button - Icon Only */}
       {app.downloadurl && (
         <a
           href={app.downloadurl}
           className="absolute top-5 right-5 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 group/download"
           aria-label={`Download ${app.title} app`}
           rel="noopener"
           target="_blank"
         >
           <Download className="h-6 w-6 text-green-500 group-hover/download:scale-150 transition-transform duration-200" />
           
         </a>
       )}
     </div>
   );
 }



