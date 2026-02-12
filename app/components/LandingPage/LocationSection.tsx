import Link from "next/link";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="py-20 px-4 md:px-10 lg:px-40 bg-white dark:bg-[#1a2632]"
    >
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 w-full md:w-1/3 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
              <span className="material-symbols-outlined text-lg">
                pin_drop
              </span>
              <span>Visit Us</span>
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight leading-tight">
              Find Our Location
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              We are conveniently located in the heart of the city. Drop by for
              a quick wash or schedule a full detail service.
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#15202b] border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-primary mt-1">
                  storefront
                </span>
                <div>
                  <h4 className="font-bold text-[#0d141b] dark:text-white mb-1">
                    DMDCW
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    123 Clean Street, Wash City, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#15202b] border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-primary mt-1">
                  schedule
                </span>
                <div>
                  <h4 className="font-bold text-[#0d141b] dark:text-white mb-1">
                    Jam Operasional
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Senin - Minggu: 08:00 AM - 08:00 PM
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold h-12 px-6 transition-all w-full sm:w-fit"
              href="https://maps.google.com"
              target="_blank"
            >
              <span>Get Directions</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="flex-1 w-full md:w-2/3 h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 relative group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-gray-200"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALVdx0HTdV7L301q_NSkFz9sMKfCNopJJO0Vkp-zEvVUMWqYpvHuBPZOsatYnPWrCTo-DJBdu3F0UoSyGkP7W4rrsrltPzYEuDgr_CXbPsK2Ty_1tVSWLc2s4pqW2N_3xBwcTbCYNqQrbHp315tayZAEeCaqOzruGQ6pTFJXBGuj8Wwh9mhfHiTQl6Tv9k7UPQ7xINs43Hmm_-Kdbpnqw5TA8X_0TRPQzyzus7C29NTmaFNF5kn5DY17Wvm-Q35sYkD2gp0HTtY2A')",
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-2">
                    map
                  </span>
                  <p className="text-gray-400 dark:text-gray-500 font-medium">
                    Interactive Map View
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-64 bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  Open Now
                </span>
                <div className="flex text-yellow-400 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    star
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                &quot;Best car wash in town! Fast and clean.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
