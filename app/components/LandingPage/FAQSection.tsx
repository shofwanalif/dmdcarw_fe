"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Berapa lama waktu pencucian mobil?",
    answer:
      "Waktu pencucian mobil biasanya memakan waktu sekitar 60 menit atau 1 jam untuk layanan cuci standar tergantung kondisi kendaraan.",
  },
  {
    question: "Bagaimana jika saya tidak bisa datang tepat waktu?",
    answer:
      "Anda mendapatkan toleransi waktu 10 menit dari jadwal yang telah ditentukan. Jika Anda terlambat lebih dari itu, maka booking Anda akan dianggap batal dan mengikuti walk in slot.",
  },
  {
    question: "Apakah hanya melayani pelanggan yang booking saja?",
    answer:
      "Tidak, kami tetap melayani pelanggan yang datang langsung walaupun tanpa booking.",
  },
  {
    question:
      "Apakah booking yang sudah terjadwal bisa diubah atau dibatalkan?",
    answer:
      "Ya, Anda dapat mengubah jadwal booking Anda dengan menghubungi kami minimal 24 jam sebelum waktu yang telah ditentukan. Untuk pembatalan, silakan hubungi kami sebelum waktu yang telah ditentukan.",
  },

  {
    question: "Apakah produk yang digunakan aman untuk cat mobil?",
    answer:
      "Ya, kami menggunakan produk berkualitas yang aman untuk cat dan interior kendaraan Anda. Semua produk yang kami gunakan telah teruji untuk digunakan pada kendaraan.",
  },
  {
    question: "Apakah Anda menyediakan garansi untuk layanan?",
    answer:
      "Kami memberikan garansi kepuasan untuk semua layanan kami. Jika Anda tidak puas dengan hasil, kami akan memperbaikinya sesuai kebutuhan. Garansi spesifik tergantung pada jenis layanan yang dipilih.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 md:px-10 lg:px-40 bg-gray-50 dark:bg-[#0d141b]"
    >
      <div className="max-w-[960px] mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-[#0d141b] dark:text-white text-base font-semibold pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
