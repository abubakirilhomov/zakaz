import React from "react";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";
//cjiewohviuorbuvirwbvniuervr
const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-8 px-4">
      <div className="container lg:mx-auto flex flex-col md:flex-row justify-between lg:items-center">
        <div className="text-sm md:text-left lg:text-start mb-4 md:mb-12">
          <p className="font-semibold mb-5">
            "NADIA'S SCHOOL" MAS'ULIYATI CHEKLANGAN JAMIYAT
          </p>
          <p>ИНН: 311141396</p>
          <p>X/R: 202080000000702344001</p>
          <p>МФО: 01036</p>
          <p>Банк: Тошкент Ш., "ИПАК ЙУЛИ" АИТ БАНКИНИНГ САФБОН ФИЛИАЛИ</p>
        </div>

        <div className="text-white">
          <div className="text-sm space-y-2 mb-4 md:mb-0">
            <a href="#" className="block text-start hover:text-gray-400">
              Публичная оферта
            </a>
            <a href="#" className="block hover:text-gray-400">
              Политика конфиденциальности
            </a>
          </div>

          <div className="flex space-x-4 text-pink-500 mt-5 mb-5">
            <a
              href="https://www.instagram.com/nadia.abdullakhodjaeva?igsh=cWg5anJ1bG50b3d2"
              className="hover:text-pink-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com/@nadiaabdullakhodjaeva?si=Et5G5mALfIQhKMzr"
              className="hover:text-pink-400"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://t.me/nadia_admini"
              className="hover:text-pink-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-900" />
      <div className="text-center text-gray-500 mt-4 text-xs">
        © 2024 Nadia’s school. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
