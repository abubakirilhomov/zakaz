export default function Component() {
    return (
      <div className="relative min-h-screen bg-black text-white overflow-hidden mb-5">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-transparent z-0" />
  
        <div className="relative z-10 px-4 md:px-16 py-8">
          {/* Header Section */}
          <div className="flex flex-col items-center md:flex-row md:items-start justify-between w-full mb-8 md:mb-20 text-center md:text-left">
            {/* Logo and Name */}
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 md:w-14 md:h-14 relative">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-light tracking-wider">
                  NADIA ABDULLAXODJAYEVA
                </h2>
                <p className="text-sm md:text-base font-light tracking-wide opacity-80">
                  REPRODUKTIV PSIXOLOG
                </p>
              </div>
            </div>
            {/* Date and Time */}
            <div className="text-center md:text-right">
              <p className="text-sm md:text-base font-light">20-noyabr</p>
              <p className="text-xl md:text-3xl font-light text-red-500">20:00</p>
            </div>
          </div>
  
          {/* Main Content Section */}
          <div className="mt-8 md:mt-32 max-w-md md:max-w-2xl mx-auto md:ml-36 text-center md:text-left">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-2">
              Haqiqiy baxtga
            </h1>
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-4">
              yetish uchun
            </h1>
            <p className="text-4xl md:text-6xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A]">
              5 qadam
            </p>
  
            {/* Button */}
            <button className="w-full md:w-auto py-3 px-6 md:px-10 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
              Webinarga yozilish
            </button>
  
            {/* Price Section */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-lg md:text-xl mt-6 justify-center md:justify-start">
              <span className="line-through text-gray-500">300.000 so'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] font-medium">
                Bepul
              </span>
            </div>
          </div>
        </div>
  
        {/* Background Image */}
        <div className="absolute top-0 h-full w-full min-h-screen">
          <img
            src="/o.png"
            alt="Background Image"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center top',
            }}
          />
        </div>
      </div>
    );
  }
  