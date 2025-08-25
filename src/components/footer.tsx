import React from "react";
import { Github, Linkedin, Youtube, MessageCircle, ExternalLink, Heart } from "lucide-react";
import '../../styles/globals.css'

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
     <footer className="bg-background border-t border-border/40 py-8">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col items-center space-y-6">
           {/* Developer Branding */}
           <div className="text-center space-y-2">
             <h3 className="font-semibold text-lg gradient-text">Vishnu N K</h3>
             <p className="text-sm text-muted-foreground max-w-md">
               Professional cross-platform app developer
             </p>
           </div>

           {/* Social Links - Horizontal Layout */}
           <div className="flex items-center space-x-4" role="list" aria-label="Social media links">
             <a
               href="https://github.com/visnkmr"
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
               aria-label="Visit GitHub profile"
               role="listitem"
             >
               <Github className="h-5 w-5" />
             </a>

             <a
               href="https://www.linkedin.com/in/vishnunk-59124/"
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
               aria-label="Visit LinkedIn profile"
               role="listitem"
             >
               <Linkedin className="h-5 w-5" />
             </a>

             <a
               href="https://youtube.com/@vishnunk"
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
               aria-label="Visit YouTube channel"
               role="listitem"
             >
               <Youtube className="h-5 w-5" />
             </a>

             <a
               href="https://vishnunkmr.t.me/"
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
               aria-label="Join Telegram group"
               role="listitem"
             >
               <MessageCircle className="h-5 w-5" />
             </a>
           </div>

           {/* Tech Stack */}
           <div className="flex items-center space-x-1 text-xs text-muted-foreground">
             <span>Made with</span>
             <Heart className="h-3 w-3 text-red-500 fill-current" />
             <span>using Next.js & React</span>
           </div>

           {/* Copyright */}
           <div className="text-center space-y-2">
             <p className="text-sm text-muted-foreground">
               © {currentYear} Vishnu N K. All rights reserved.
             </p>
             <a
               href="/privacy"
               className="text-xs text-muted-foreground hover:text-foreground transition-colors"
               aria-label="View privacy policy"
             >
               Privacy Policy
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 }