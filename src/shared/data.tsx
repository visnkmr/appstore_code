import { Storelist, review } from "./types";

export const stores: Storelist = {
    stores: [
      {
        name: 'Github',
        link: 'https://github.com/visnkmr',
        src: "https://raw.githubusercontent.com/visnkmr/.github/dee2748a4392c7c5f034d062345a02cf01b6fbb4/sogh.svg",
        alt: 'Github',
      },
      {
        name:'Amazon Appstore',
        link: 'https://www.amazon.com/gp/mas/dl/android?p=io.github.visnkmr.bapl&showAll=1',
        src: 'https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-white.png',
        alt: 'Amazon Appstore',
      },
      {
        name:'Google Play',
        link: 'https://play.google.com/store/apps/developer?id=Vishnu+N+K',
        src: 'https://play.google.com/intl/en_us/badges/images/badge_new.png',
        alt: 'Google Play',
      },
      // {
      //   name:'Microsoft Store',
      //   link: 'https://apps.microsoft.com/store/search?publisher=Vishnu%20N%20K',
      //   src: 'https://get.microsoft.com/images/en-us%20dark.svg',
      //   alt: 'Microsoft store',
      // },
    ],
  };
  
  export const reviews: Array<review> = [
    {
      appname:"bapl",
      review:"Allows you to view all apps currently running and possibly slowing down your fire stick. By being able to force stop any apps you don’t want to use it should speed up the one you actually are about to use. Great idea that should have been implemented by Amazon in the first place. Who knew that every app you open stays open 24/7 and contributes to slowdown of the firestick and sometimes shutting down other apps? -Mike C",
      storename:"aas"
    },{
      appname:"fx",
      review:'I heard about this app on YouTube. I got because of that and I am very happy with it. It works well and is easy to use. I highly recommend it to all who need it. It just works. -Duane G. Jacobs',
      storename:"aas"
    },{
      appname:"bapl",
      review:"If your firestick buffers and is running slow then you need this. Even apps you aren’t using will pop up in the background and run slowing down your speed. The first time I downloaded this and ran it I had 25 apps running in the background haha no wonder it was a snails crawl doing anything. So it took a few minutes of time but I Force stopped what was running and like magic it was like just getting it out of the package. I can’t recommend this app enough because you will always have something running in the background. Once a week I’ll go in wipe them out and it’s fast after that. -Mark",
      storename:"aas"
    },{
      appname:"bapl",
      review:'This app is a "must have" for Amazon Firestick owners. Helps control all your apps running in the background, consuming critical resources and hindering the stick operation. -	Paul Reichard',
      storename:"aas"
    },{
      appname:"bapl",
      review:'I always use this when I am finished watching programs and heading to bed. Many apps stay open and are using up memory. -The Boys',
      storename:"aas"
    },{
      appname:"fx",
      review:'Useful to find files on Fire Stick - donperkins',
      storename:"aas"
    },{
      appname:"wfm",
      review:'This is the only app that works when sending files to my amazon stick - Cd6',
      storename:"aas"
    },{
      appname:"wfm",
      review:'Just for its purposed, very simple but working pretty well. - JMD',
      storename:"aas"
    },

  ];

  export const apab = new Map<string, string>([
    ['bapl', 'Background Apps and Process List'],
    ['fx', 'File Explorer'],
    ['wfm', 'Wireless File Manager']
  ]);
  