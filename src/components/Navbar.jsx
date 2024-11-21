import { useState, useEffect } from "react";
import mobileBg from "../assets/BG.png";
import desktopBg from "../assets/o.png";
import mobileLogo from "../assets/MobileLogo2.svg";

export default function Component() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden mb-5">
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-transparent z-0" />

      <div className="relative z-10 px-4 md:px-16 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start justify-between w-full mb-8 md:mb-20 text-center md:text-left">
          {/* Conditional Logo */}
          {isMobile ? (
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <img
                  src={mobileLogo}
                  alt="Mobile Logo"
                  className="w-[170px] object-contain"
                />
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm md:text-base font-light">27-noyabr</p>
                <p className="text-xl md:text-3xl font-light text-red-500">
                  20:00
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 md:w-14 md:h-14 relative">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="lg:text-lg text-xs md:text-xl font-light tracking-wider">
                  NADIA ABDULLAXODJAYEVA
                </h2>
                <p className="text-sm md:text-base font-light tracking-wide opacity-80">
                  REPRODUKTIV PSIXOLOG
                </p>
              </div>
            </div>
          )}

          {isMobile ? (
            ""
          ) : (
            <div className="text-center md:text-right">
              <p className="text-sm md:text-base font-light">27-noyabr</p>
              <p className="text-xl md:text-3xl font-light text-red-500">
                20:00
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-32 max-w-md md:max-w-2xl mx-auto md:ml-36 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-2">
            Haqiqiy baxtga
          </h1>
          <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-4">
            yetish uchun
          </h1>
          <p className="text-4xl md:text-6xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A]">
            5 qadam
          </p>
          <div className="mt-72 lg:mt-0">
            <a
              href="https://t.me/nadiaBot?start=start"
              className="w-full md:max-w-[40%] py-3 px-6 md:px-10 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Webinarga yozilish
            </a>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-lg md:text-xl mt-6 justify-center md:justify-start">
              <span className="line-through text-gray-500">300.000 so'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] font-medium">
                Bepul
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 h-full w-full min-h-screen">
        <img
          src={isMobile ? mobileBg : desktopBg}
          alt="Background"
          className="w-full h-full object-cover flex items-center justify-center"
          style={{
            objectPosition: "center top",
          }}
        />
      </div>
    </div>
  );
}
