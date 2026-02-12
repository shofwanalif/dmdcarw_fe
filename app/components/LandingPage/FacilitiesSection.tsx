export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="py-20 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs mb-3">
              <span className="material-symbols-outlined text-lg">
                restaurant
              </span>
              <span>Comfort While You Wait</span>
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight leading-tight mb-4">
              Fasilitas Kami: Food &amp; Snacks Area
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Waiting for your vehicle doesn&apos;t have to be boring. At DMD,
              customers can enjoy various snacks, meals, and beverages in our
              comfortable lounge while we make your ride shine.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  mosque
                </span>
                <span className="text-sm font-bold">Musholla</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  fastfood
                </span>
                <span className="text-sm font-bold">Angkringan</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  wifi
                </span>
                <span className="text-sm font-bold">Free Wi-Fi</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvHjYOhg-y9ble6VcUzaCbzDLBZKEleZdiWbmpYiL_A9Hsg6e1ZOSzVIcIaNSOGfzbeoGfXaegKnPAEOC3RinLOLUflNRCMtdywvc7DdstiZr_-_qn9XHBJtJjDKNn52QkWF4PMAcvDGIgJgaO81dgBfzfXB-_a5G8M-eqPFDnG5L6iu2gqX30DJEsCpaV4xwVCAUwTnb1D9PEjEPGK9NryJiYSqn0KUiKfVTwb8_VWdefDeO0U3pSWV7IjHgbC4B9b-FXy_sS1mE')",
                }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
