"use client";
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2025-01-10');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      setTimeLeft(calculateTimeLeft());

      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isMounted]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 bg-white px-3 rounded-lg border border-gray-500 shadow-lg">
        <div className="font-waterfall text-3xl font-bold">{timeLeft[interval]}</div>
        <div className="text-lg">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex justify-center mt-5">
      {isMounted && timerComponents.length ? timerComponents : <span>Selamat atas pernikahannya, semoga sakinah mawadah warohmah, berkah selalu.. Aamiin</span>}
    </div>
  );
};

export default CountdownTimer;
