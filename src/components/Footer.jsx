import React from "react";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm md:text-left text-center mb-4 md:mb-0">
          <p className="font-semibold">
            "NADIA'S SCHOOL" MAS'ULIYATI CHEKLANGAN JAMIYAT
          </p>
          <p>ИНН: 311141396</p>
          <p>X/R: 202080000000702344001</p>
          <p>МФО: 01036</p>
          <p>Банк: Тошкент Ш., "ИПАК ЙУЛИ" АИТ БАНКИНИНГ САФБОН ФИЛИАЛИ</p>
        </div>

        <div className="text-white">
          <div className="text-sm   space-y-2 mb-4 md:mb-0">
            <a href="#" className="block hover:text-gray-400">
              Публичная оферта
            </a>
            <a href="#" className="block hover:text-gray-400">
              Политика конфиденциальности
            </a>
          </div>

          <div className="flex space-x-4 text-pink-500 mt-5">
            <a href="#" className="hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
      <div className="text-center text-gray-500 mt-4 text-xs">
        © 2024 Nadia’s school. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
