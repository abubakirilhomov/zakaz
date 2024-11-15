export default function Component() {
    return (
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-transparent z-0" />
  
        {/* Контент, который должен быть сверху */}
        <div className="relative z-10 px-4 md:px-16 py-8">
          {/* ... Ваш существующий контент ... */}
          <div className="flex flex-col items-center md:flex-row md:items-start justify-between w-full mb-8 md:mb-20 text-center md:text-left">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-light tracking-wider">
                  NADIA ABDULLAXODJAYEVA
                </h2>
                <p className="text-xs md:text-sm font-light tracking-wide opacity-80">
                  REPRODUKTIV PSIXOLOG
                </p>
              </div>
            </div>
  
            <div className="text-center md:text-right">
              <p className="text-sm md:text-base font-light">20-noyabr</p>
              <p className="text-lg md:text-2xl font-light text-red-500">20:00</p>
            </div>
          </div>
  
          <div className="mt-8 md:mt-32 max-w-md md:max-w-2xl mx-auto md:ml-36 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-extralight leading-tight mb-2">
              Haqiqiy baxtga
            </h1>
            <h1 className="text-3xl md:text-6xl font-extralight leading-tight mb-4">
              yetish uchun
            </h1>
            <p className="text-3xl md:text-6xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A]">
              5 qadam
            </p>
          </div>
        </div>
  
        {/* Контейнер для кнопки и текста */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 z-10">
          <button className="w-full md:w-auto py-3 px-8 md:px-12 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
            Webinarga yozilish
          </button>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-lg md:text-xl mt-6 justify-center md:justify-start">
            <span className="line-through text-gray-500">300.000 so'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] font-medium">Bepul</span>
          </div>
        </div>
  
        {/* Фоновое изображение */}
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <img
            src="/o.png"
            alt="Background Image"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'right top',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    );
  }