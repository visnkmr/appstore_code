'use client';
import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

interface LineClampProps extends React.HTMLAttributes<HTMLDivElement> {
  // className:string|undefined,
  text: string;
  lines?: number;
}

const LineClamp = ({ text, lines = 2 }: LineClampProps) => {
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkButtonAvailability = _.debounce(() => {
      const hasClamping = containerRef.current!.clientHeight < containerRef.current!.scrollHeight;
      setShowButton(hasClamping);
    }, 100);

    checkButtonAvailability();
    window.addEventListener('resize', checkButtonAvailability);

    return () => {
      window.removeEventListener('resize', checkButtonAvailability);
    }
  }, []);

  const handleClick = () => setClamped(!clamped);

  const toggleClass = () => {
    setClamped(!clamped);
  };

  return (
    <div className="relative">
      <div ref={containerRef} className={classnames(clamped ? `line-clamp-${lines}` : "")} onClick={toggleClass}>
        {text}
      </div>
      {showButton && (
        <button onClick={handleClick} className="absolute right-0 bottom-0 bg-white text-blue-500 hover:text-blue-700">
          {clamped ? "..." : "<See Less"}
        </button>
      )}
    </div>
  );
};

export default LineClamp;
