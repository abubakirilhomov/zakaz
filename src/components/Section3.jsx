import React from 'react';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import female from "../assets/female.png";

const Section3 = () => {
  const items = [
    { icon: icon1, text: "Jinsiy hayot asoslari" },
    { icon: icon2, text: "Jinsiy aloqaning fiziologik va psixologik jihatlari" },
    { icon: icon3, text: "Noto’g’ri jinsiy tarbiya" },
    { icon: icon4, text: "Jinsiy buzilishlar (vagenizm, dispoureniya, fetishizm, vamperizm, vuaverizm)" },
  ];

  const labels = [
    { text: "Erkak e’tiborsizligi", position: "lg:top-[-10%] lg:left-[30%]" },
    { text: "O’zidan uyalish", position: "lg:top-[-5%] lg:right-[30%]" },
    { text: "O’ziga nisbatan ishonchsizlik", position: "lg:top-[15%] lg:left-[20%]" },
    { text: "Kuchli stress", position: "lg:top-[40%] lg:left-[30%]" },
    { text: "Extiros uyg’oto olmaslik", position: "lg:top-[15%] lg:right-[30%]" },
    { text: "Befarqlik", position: "lg:top-[35%] lg:right-[25%]" },
    { text: "Orgazmga erishaolmaslik", position: "lg:bottom-[30%] lg:left-[20%]" },
    { text: "Erkakda jinsiy yaqinlikning zaifligi", position: "lg:top-[65%] lg:right-[20%]" },
  ];

  return (
    <section className="text-center py-8 mb-24" style={{background: 'linear-gradient(90deg, rgba(172, 172, 172, 0.2) -10.01%, rgba(70, 70, 70, 0.2) 50.05%, rgba(172, 172, 172, 0.2) 110.09%)'}}>
      <p className="text-5xl mb-8">Efirda nima bo’ladi?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.icon} alt="Icon" className="max-w-48 max-h-48 w-full h-full" />
            <p className="text-center text-white text-md max-w-[65%]">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Second part with centered image and labels */}
      <div className="relative flex flex-col items-center lg:mt-44">
        <img src={female} alt="Woman" className="mb-[-60px] max-w-[300px]" />
        <p className="text-white text-4xl bg-dark py-4 px-7 rounded-2xl backdrop-blur-xl" style={{background: "linear-gradient(90deg, rgba(255, 122, 156, 0.2) 0%, rgba(102, 1, 22, 0.2) 50%, rgba(255, 122, 156, 0.2) 100%)" }}>Depressiya sabablari</p>

        {/* Labels positioned around the image */}
        <div className="absolute inset-0 flex justify-center items-center">
          {labels.map((label, index) => (
            <span
              key={index}
              className={`absolute ${label.position} text-white text-sm px-3 py-1 max-w-[13%] rounded-2xl flex items-center text-center bg-gradient-to-r from-gray-500/20 via-gray-700/20 to-gray-500/20`}
            >
              {label.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
