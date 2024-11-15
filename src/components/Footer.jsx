import React from "react";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start p-2">
        <div className="text-sm text-start p-1 md:text-left mb-4 md:mb-0 space-y-1">
          <p className="font-semibold text-white">
            "NADIA'S SCHOOL" MAS'ULIYATI CHEKLANGAN JAMIYAT
          </p>
          <p>ИНН: 311141396</p>
          <p>X/R: 202080000000702344001</p>
          <p>МФО: 01036</p>
          <p>Банк: Тошкент Ш., "ИПАК ЙУЛИ" АИТ БАНКИНИНГ САФБОН ФИЛИАЛИ</p>
        </div>

        <div className="flex flex-col items-start md:items-start text-white space-y-4">
          <div className="text-sm space-y-2">
            <a href="#" className="block hover:text-gray-300">
              Публичная оферта
            </a>
            <a href="#" className="block hover:text-gray-300">
              Политика конфиденциальности
            </a>
          </div>

          <div className="flex space-x-4 text-pink-500">
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
      <hr className="border-gray-600 my-4" />
      <div className="text-center text-gray-500 text-xs">
        © 2024 Nadia’s school. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
