'use client'
import React from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';


interface TextSpinProps  {
  text:any,
  interval:number,
  direction:'up'|'down'
}
export default function Textspin({text,interval,direction}:TextSpinProps){
  const TEXTS=text;
  const [index, setIndex] = React.useState(0);
  // const [randomIndex, setRandomIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => {
        // setRandomIndex(getRandomInt(0, TEXTS.length));
        setIndex((index) => index + 1)
      },
      interval, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
      <ReactTextTransition className='flex justify-center' inline direction={direction}>{TEXTS[index % TEXTS.length]}</ReactTextTransition>
  // <>
  // {`${TEXTS[index%6]}`.split("").map((txt, i) => (
  //   <ReactTextTransition key={i}  className="big" inline>
  //     {txt}
  //   </ReactTextTransition>
  // ))}
  // </>

  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
