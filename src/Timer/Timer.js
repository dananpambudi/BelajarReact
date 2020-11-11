import React, { useState, useEffect, useRef } from 'react';

export default function Timer() {
  const [timer, settimer] = useState(new Date());
  const secondsPassed = useRef(0);

  useEffect(() => {
    const timerid = setInterval(() => {
      secondsPassed.current += 1;
      settimer(new Date());
    }, 1000);

    return () => {
      clearInterval(timerid);
    };
  }, [timer]);

  return (
    <div>
      <p>{timer.toLocaleTimeString('en-US')} </p>
      <p>{secondsPassed.current}</p>
    </div>
  );
}
