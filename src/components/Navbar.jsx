"use client"

export default function Component() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-transparent z-0" />

      <div className="relative z-10 px-8 md:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <div className="w-12 h-12 relative">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg font-light tracking-wider">
                NADIA ABDULLAXODJAYEVA
              </h2>
              <p className="text-xs font-light tracking-wide opacity-80">
                REPRODUKTIV PSIXOLOG
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm md:text-base font-light">20-noyabr</p>
            <p className="text-lg md:text-2xl font-light text-red-500">20:00</p>
          </div>
        </div>

        <div className="mt-16 md:mt-32 max-w-2xl ml-0 md:ml-36">
          <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-2">
            Haqiqiy baxtga
          </h1>
          <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-4">
            yetish uchun
          </h1>
          <p className="text-4xl md:text-6xl font-medium mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A]">
            5 qadam
          </p>

          <button className="py-3 px-8 md:px-12 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
            Webinarga yozilish
          </button>

          <div className="flex items-center gap-3 text-lg md:text-xl mt-6 justify-center md:justify-start">
            <span className="line-through text-gray-500">300.000 so'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] font-medium">Bepul</span>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-0 right-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/o.png')",
          backgroundSize: "cover",     
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  )
}
