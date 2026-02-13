export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-[960px] mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight">
            Layanan Kami
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Pilih layanan cuci kendaraan yang sesuai dengan kebutuhan Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2632] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="flex items-start justify-between">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">
                  directions_car
                </span>
              </div>
              <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold uppercase tracking-wide">
                Best Value
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d141b] dark:text-white text-xl font-bold">
                Cuci Mobil
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-gray-400 text-sm font-medium">
                  Starts at
                </span>
                <span className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight">
                  Rp 50k
                </span>
              </div>
            </div>
            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full"></div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">Cuci Exterior</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">Vacum Interior</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">Pembersihan Kaca</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">
                  Pembersihan Ban dan Velg
                </span>
              </div>
            </div>
            <button className="w-full mt-4 flex items-center justify-center rounded-lg h-12 px-4 bg-[#e7edf3] hover:bg-primary hover:text-white dark:bg-gray-700 dark:hover:bg-primary dark:text-white text-[#0d141b] text-sm font-bold transition-all duration-200 group-hover:bg-primary group-hover:text-white cursor-pointer">
              Booking
            </button>
          </div>
          <div className="group flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2632] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="flex items-start justify-between">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
                <span className="material-symbols-outlined text-3xl">
                  two_wheeler
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d141b] dark:text-white text-xl font-bold">
                Cuci Motor
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-gray-400 text-sm font-medium">
                  Starts at
                </span>
                <span className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight">
                  Rp 25k
                </span>
              </div>
            </div>
            <div className="h-px bg-gray-100 dark:bg-gray-700 w-full"></div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">Cuci Exterior</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">Pembersihan Rantai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">Pembersihan Velg</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm font-medium">
                  Pembersihan Kaca Lampu
                </span>
              </div>
            </div>
            <button className="w-full mt-4 flex items-center justify-center rounded-lg h-12 px-4 bg-[#e7edf3] hover:bg-primary hover:text-white dark:bg-gray-700 dark:hover:bg-primary dark:text-white text-[#0d141b] text-sm font-bold transition-all duration-200 group-hover:bg-primary group-hover:text-white cursor-pointer">
              Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
