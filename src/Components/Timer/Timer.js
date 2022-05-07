import React, { useEffect, useState } from 'react'
import "./Timer.css"

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`10/01/${year}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  console.log(timeLeft);


  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='border-solid border-gray-200 drop-shadow-2xl border-2 m-2 p-2 rounded bg-gradient-to-r from-sky-500 to-indigo-500'>
        <span className='d-flex '>{timeLeft[interval]}<span> {interval}{" "}</span></span>
      </span>
    );
  });

  return (
    <div className='my-5'>
    <h1 className='text-white font-bold text-3xl mb-3 my-5'>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</h1>
  </div>
  )
}

export default Timer