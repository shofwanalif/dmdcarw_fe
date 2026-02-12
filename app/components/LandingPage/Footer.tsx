import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-[#1a2632] border-t border-[#e7edf3] dark:border-gray-800"
    >
      <div className="max-w-[960px] mx-auto flex flex-col gap-8 px-5 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="material-symbols-outlined text-3xl text-primary">
            local_car_wash
          </span>
          <span className="text-[#0d141b] dark:text-white text-xl font-extrabold tracking-tight">
            DMDCW
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link
            className="text-gray-500 hover:text-primary transition-colors text-base font-medium min-w-20"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 hover:text-primary transition-colors text-base font-medium min-w-20"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-gray-500 hover:text-primary transition-colors text-base font-medium min-w-20"
            href="#booking"
          >
            Booking
          </Link>
          <Link
            className="text-gray-500 hover:text-primary transition-colors text-base font-medium min-w-20"
            href="#facilities"
          >
            Facilities
          </Link>
        </div>
        <div className="flex justify-center gap-6">
          <Link
            className="text-gray-400 hover:text-primary hover:scale-110 transition-all transform p-2 bg-gray-50 dark:bg-gray-800 rounded-full"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </Link>
          <Link
            className="text-gray-400 hover:text-primary hover:scale-110 transition-all transform p-2 bg-gray-50 dark:bg-gray-800 rounded-full"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </Link>
          <Link
            className="text-gray-400 hover:text-primary hover:scale-110 transition-all transform p-2 bg-gray-50 dark:bg-gray-800 rounded-full"
            href="#"
          >
            <span className="material-symbols-outlined">call</span>
          </Link>
        </div>
        <div className="text-gray-400 dark:text-gray-500 text-sm font-normal">
          <p className="mb-2">123 Clean Street, Wash City, Indonesia</p>
          <p>
            © 2023 d&apos;modern car wash &amp; detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
