export default function BookingSection() {
  return (
    <section
      id="booking"
      className="py-20 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#1a2632]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-3">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            How It Works
          </span>
          <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight">
            Cara Pemesanan
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Ikuti langkah berikut untuk memesan layanan kami kami secara online.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-100 dark:bg-gray-700 -translate-y-16 z-0"></div>
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-black shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
                Pilih Layanan
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Pilih layanan yang Anda butuhkan dari daftar layanan kami yang
                tersedia di menu layanan.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-black shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              2
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
                Isi Data &amp; Pilih Waktu
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Masukan data pemesan dan detail kendaraan Anda, lalu pilih waktu
                yang diinginkan.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-black shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
                Konfirmasi &amp; Selesai
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Konfirmasi pemesanan anda dan selesai! Kami akan menunggu Anda
                datang ke tempat.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center gap-4 group">
            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-black shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              4
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">
                Datang Tepat Waktu
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Datang tepat waktu sesuai jadwal yang sudah Anda pesan untuk
                mendapatkan layanan terbaik dari kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
