export default function Component() {
    return (
        <div 
            className="text-white rounded-2xl   w-[1280px] mx-auto mt-[-50px] mb-10" 
            style={{ 
                background: 'linear-gradient(90deg, rgba(172, 172, 172, 0.2) -10.01%, rgba(70, 70, 70, 0.2) 50.05%, rgba(172, 172, 172, 0.2) 110.09%)'
            }}
        >
      
            <div className="max-w-7xl  mx-auto px-4 py-12 md:px-6 lg:px-8 relative">
                <div className="bg-black w-[80px] h-[80px] rounded-full absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#660116] to-[#A91D3A]">Sovg&apos;aga</span>{" "}
                            <span className="text-white">ega</span>
                            <br />
                            <span className="text-white">bo&apos;lishni istaysizmi?</span>
                        </h1>
                        <div className="space-y-4">
                            <p className="text-xl text-gray-300">
                                Gayd: <span className="font-semibold">&quot;Intim xavfsizlik qoidalari&quot;</span>
                            </p>
                            <p className="text-gray-400">
                                Webinarda sizni yanada ko&apos;proq sovg&apos;alar kutib turibti!
                            </p>
                        </div>
                        <button className="py-3 px-12 rounded-lg font-medium text-white bg-gradient-to-r from-[#660116] via-[#C73659] to-[#A91D3A] hover:from-[#A91D3A] hover:to-[#660116] transition duration-300">
                            Webinarga yozilish
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-red-500/10 blur-xl rounded-full" />
                            <img
                                alt="Gift Box Illustration"
                                className="relative w-full h-auto"
                                src="9.png"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
