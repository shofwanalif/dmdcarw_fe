import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gray-50 dark:bg-[#15202b] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="  flex items-center gap-2">
              <span className="text-[#0d141b] dark:text-white text-xl font-extrabold tracking-tight">
                d'MD
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Professional car and motorcycle detailing services in Wash City.
              We provide premium care to ensure your ride always looks its best.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#0d141b] dark:text-white font-bold text-base uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                  href="#"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                  href="#services"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                  href="#booking"
                >
                  Booking
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
                  href="#facilities"
                >
                  Fasilitas
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#0d141b] dark:text-white font-bold text-base uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                  location_on
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  123 Clean Street, Wash City, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">
                  call
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  +62 123 4567 890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">
                  mail
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  hello@dmodern.com
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#0d141b] dark:text-white font-bold text-base uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  alternate_email
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-xs font-medium">
            © 2026 d'MD car wash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
