'use client';
import debounce from 'lodash.debounce';
import { useState, useEffect, useRef, useContext } from 'react';
import classnames from 'classnames';
import { darkorwhite } from '../../app/but';
import { ThemeContext } from './ThemeContext';
import { useLocalStorage } from './useLocalStorage';

// interface LineClampProps extends React.HTMLAttributes<HTMLDivElement> {
//   text: string;
//   lines?: number;
// }

const Thedarkhtml = ({ children}
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
const { dark } = useContext(ThemeContext);
console.log(dark)
// const [dark, setshow] = useLocalStorage("dark",true);
// console.log(dark)
// let dow=darkorwhite();
if(dark){
    return (
    
        <div className= {dark?"dark":""} >
          {children}
        </div>
    );
}
  return (
    
      <div >
        {children}
      </div>
  );
};

export default Thedarkhtml;
