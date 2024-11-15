import React, { useState, useEffect } from 'react';
import bantik from "../assets/Group4.png"

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
    <div className="mx-auto p-10 text-white rounded-lg bg-gray-800 bg-opacity-10 backdrop-blur-md"
         style={{ background: "linear-gradient(90deg, rgba(172, 172, 172, 0.2) 0%, rgba(70, 70, 70, 0.2) 50%, rgba(172, 172, 172, 0.2) 100%)" }}>
      <p className="text-5xl font-normal mb-2 text-center">Ro’yhatdan o’tib bonusni qo’lga kiriting</p>
      <p className="text-[#C73659] text-3xl mb-6 text-center">Ro’yhatdan o’tish tez orada tugaydi</p>
      <div className="flex justify-center gap-4 mb-6">
        <div className="flex flex-col shadow-md items-center py-4 px-7 rounded-lg lg:max-w-[8%] lg:min-w-[8%]"
             style={{ background: "linear-gradient(90deg, rgba(172, 172, 172, 0.2) 0%, rgba(70, 70, 70, 0.2) 50%, rgba(172, 172, 172, 0.2) 100%)" }}>
          <span className="text-4xl">{hours}</span>
          <span className="text-gray-300 text-base">soat</span>
        </div>
        <div className="flex flex-col shadow-md items-center py-4 px-7 rounded-lg lg:max-w-[8%] lg:min-w-[8%]"
             style={{ background: "linear-gradient(90deg, rgba(172, 172, 172, 0.2) 0%, rgba(70, 70, 70, 0.2) 50%, rgba(172, 172, 172, 0.2) 100%)" }}>
          <span className="text-4xl">{minutes}</span>
          <span className="text-gray-300 text-base">minut</span>
        </div>
        <div className="flex flex-col shadow-md items-center py-4 px-7 rounded-lg lg:max-w-[8%] lg:min-w-[8%]"
             style={{ background: "linear-gradient(90deg, rgba(172, 172, 172, 0.2) 0%, rgba(70, 70, 70, 0.2) 50%, rgba(172, 172, 172, 0.2) 100%)" }}>
          <span className="text-4xl ">{counter}</span>
          <span className="text-gray-300 text-base">sekund</span>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <button className="py-3 px-12 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
            Ro’yhatdan o’tish
        </button>
      </div>
        <img src={bantik} alt="" />
    </div>
  );
};

export default Section2;
