import React, { useState, useEffect } from "react";
import bantik from "../assets/Group4.png";
import gift from "../assets/image 17.png";




const Section2 = () => {
  const [counter, setCounter] = useState(59);
  const [minutes, setMinutes] = useState(3);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) return prevCounter - 1;
        setMinutes((prevMinutes) => {
          if (prevMinutes > 0) return prevMinutes - 1;
          setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : 0));
          return 59;
        });
        return 59;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto px-6 py-16 text-white bg-gray-800 bg-opacity-10 backdrop-blur-md overflow-hidden rounded-b-md lg:px-16 lg:py-20">
      {/* Tasvirlar */}
      <img
        className="hidden md:block absolute max-w-[170px] bottom-[0px] left-0"
        src={bantik}
        alt="bantik"
      />
      <img
        className="absolute max-w-[200px] right-4 top-10 md:right-0 md:top-24 md:max-w-[170px] z-10 mobile:top-auto mobile:bottom-[-40px] mobile:left-1/2 mobile:transform mobile:translate-x-[-50%] mobile:opacity-90"
        src={gift}
        alt="gift"
      />

      {/* Matn */}
      <p className="text-2xl md:text-5xl font-normal mb-2 text-center">
        Ro’yhatdan o’tib bonusni qo’lga kiriting
      </p>
      <p className="text-[#C73659] text-lg md:text-3xl mb-6 text-center">
        Ro’yhatdan o’tish tez orada tugaydi
      </p>

      {/* Countdown */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="flex flex-col items-center py-4 px-6 md:px-7 rounded-lg bg-gradient-to-br from-gray-700/30 via-gray-600/20 to-gray-800/30 shadow-md">
          <span className="text-4xl md:text-5xl">{hours}</span>
          <span className="text-gray-300 text-base md:text-lg">soat</span>
        </div>
        <div className="flex flex-col items-center py-4 px-6 md:px-7 rounded-lg bg-gradient-to-br from-gray-700/30 via-gray-600/20 to-gray-800/30 shadow-md">
          <span className="text-4xl md:text-5xl">{minutes}</span>
          <span className="text-gray-300 text-base md:text-lg">minut</span>
        </div>
        <div className="flex flex-col items-center py-4 px-6 md:px-7 rounded-lg bg-gradient-to-br from-gray-700/30 via-gray-600/20 to-gray-800/30 shadow-md">
          <span className="text-4xl md:text-5xl">{counter}</span>
          <span className="text-gray-300 text-base md:text-lg">sekund</span>
        </div>
      </div>

      {/* Tugma */}
      <div className="w-full flex justify-center">
        <button className="py-3 px-12 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
          Ro’yhatdan o’tish
        </button>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute.max-w-[200px] {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
            top: auto;
            bottom: -40px;
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default Section2;
