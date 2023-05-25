'use client';
// import _ from 'lodash';
import { useState, useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';

interface LineClampProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  lines?: number;
}
const debounce = (func: { (): void; (arg0: any): void; }, delay: number | undefined) => {
  let timeoutId: string | number | NodeJS.Timeout | undefined;
  return (...args:any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const LineClamp = ({ text, lines = 2, className, ...props }: LineClampProps) => {
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const checkButtonAvailability = useCallback(() => {
    const hasClamping = containerRef.current!.clientHeight < containerRef.current!.scrollHeight;
    setShowButton(hasClamping);
  }, []);
  useEffect(() => {
    

    checkButtonAvailability();
    const debouncedCheckButtonAvailability = debounce(checkButtonAvailability, 100);
    window.addEventListener('resize', debouncedCheckButtonAvailability);

    return () => {
      window.removeEventListener('resize', debouncedCheckButtonAvailability);
    }
  }, [checkButtonAvailability]);

  const handleClick = () => setClamped(!clamped);

  const toggleClass = () => {
    setClamped(!clamped);
  };

  return (
    <div className='relative'>
    <div className={classnames(clamped ? `line-clamp-${lines}` : "", className)} ref={containerRef} onClick={toggleClass} {...props}>
      {text}
      {showButton && (
        <button onClick={handleClick} className="absolute right-0 bottom-0 text-blue-500 hover:text-blue-700">
          {clamped ? "..." : "<See Less"}
        </button>
      )}
    </div>
    </div>
  );
};

export default LineClamp;
