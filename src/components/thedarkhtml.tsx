'use client';
import debounce from 'lodash.debounce';
import { useState, useEffect, useRef, useContext } from 'react';
import classnames from 'classnames';
// import { darkorwhite } from '../../app/but';
import { ThemeContext } from './ThemeContext';
import { useLocalStorage } from './useLocalStorage';
import '../../styles/globals.css'

// interface LineClampProps extends React.HTMLAttributes<HTMLDivElement> {
//   text: string;
//   lines?: number;
// }
interface tdhprops extends React.HTMLAttributes<HTMLDivElement> {

  }
const Thedarkhtml = ({ children,...props}:tdhprops
    // : 
    // LineClampProps
    ) => {
//   const [clamped, setClamped] = useState(true);
//   const [showButton, setShowButton] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const checkButtonAvailability = debounce(() => {
//       if (containerRef.current) {
//         const hasClamping = containerRef.current.clientHeight < containerRef.current.scrollHeight;
//         setShowButton(hasClamping);
//       }
//     }, 100);

//     checkButtonAvailability();
//     window.addEventListener('resize', checkButtonAvailability);

//     return () => {
//       window.removeEventListener('resize', checkButtonAvailability);
//     };
//   }, []);

//   const handleClick = () => setClamped(!clamped);

//   const toggleClass = () => {
//     setClamped(!clamped);
//   };
const [isReady, setIsReady] = useState(false);

const { dark } = useContext(ThemeContext);
useEffect(() => {
    setIsReady(true);
  }, [dark]);

  if (!isReady) {
    return (
        <>
        <div className='dark'>

        </div>
        </>
    );
  }
console.log("changing...."+dark)
// const [dark, setshow] = useLocalStorage("dark",true);
// console.log(dark)
// let dow=darkorwhite();
if(dark){

    return (
    
        <div className= "dark" {...props}>
          {children}
        </div>
    );
}
else{

    return (
      
        <div className='bg-white' {...props}>
          {children}
        </div>
    );
}
};

export default Thedarkhtml;
