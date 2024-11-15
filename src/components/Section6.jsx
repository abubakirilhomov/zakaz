import React from "react";
import Section6img from "../assets/Section6.png";

const Section6 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
      <div className="flex gap-12 flex-col md:flex-row items-center md:space-x-12">
        
        <div className="mb-8 md:mb-0">
          <img src={Section6img} alt="Speaker" className="w-[408px] h-[612px] object-cover rounded-lg shadow-lg" />
        </div>

        <div className="space-y-6 max-w-md">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-400">
              Agar siz ham o'zingizga ishonch va baxt tuyg'usini his qilishni istasangiz
            </p>
            <h1 className="text-4xl font-serif font-bold mt-4">
              Sizni Webinarimda kutaman!
            </h1>
          </div>

          <div className="space-y-4">
            <div className="flex w-[380px] items-center gap-3 bg-gray-800 rounded-xl p-2 shadow-md">
              <span className="text-gray-400">Mavzu:</span>
              <span className="text-gray-200 font-medium">Haqiqiy baxtga yetish uchun 5 qadam</span>
            </div>
            <div className="flex w-[300px] items-center gap-3 bg-gray-800 rounded-xl p-2 shadow-md ">
              <span className="text-gray-400">Spiker:</span>
              <span className="text-gray-200 font-medium">Nadia Abdullaxodjayeva</span>
            </div>
          </div>

          <div >
          <button className="py-3 px-12 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
            Ro’yhatdan o’tish
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
