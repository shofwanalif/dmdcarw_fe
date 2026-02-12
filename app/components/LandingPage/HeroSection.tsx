import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-0">
      <div className="w-full h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDa0SDR2wWE2R7PZjI_AYHXxlcqnztut5uX68trItO_yLpmyY6IF3Fyf2V0amnnsDpOfvvZiI9EnGqUzNKsbjmTfFQ3bHkwjmmB4LR8SDEpNtcSFd_4u9knmsyajH5ysNWhipYQSZ2hWCrkeQC59Jlna64npCPupcFlYqtTtrrISg748Vi30u-MNt4qMVGK3N9akVKESnfuBGlJyVTkgertxSZpvSxPo_pOg1QaacSwlxdZCa2nzqgOpALzStE0D2M5r_r2CrzYF-s")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-20 lg:px-40 max-w-7xl mx-auto">
          <div className="max-w-2xl flex flex-col gap-6">
            <span className="inline-block px-3 py-1 bg-primary/20 text-blue-200 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-bold w-fit uppercase tracking-wider">
              Expert Auto Detailing
            </span>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Premium Wash for <br /> Your Premium Ride
            </h1>
            <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-lg">
              Professional detailing for cars and motorcycles at DMD. We treat
              every vehicle like our own, ensuring a showroom shine every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30 cursor-pointer">
                See Services
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
