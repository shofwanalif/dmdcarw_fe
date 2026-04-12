"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../lib/schemas/booking.schema";
import { BookingSchema } from "../lib/schemas/booking.schema";
import { generateWhatsAppLink } from "../lib/utils/whatsapp";
import TermAndCondition from "./TermAndCondition";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.5l5.797-1.519A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.518-5.16-1.42l-.37-.22-3.44.902.917-3.354-.24-.386A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0 mt-0.5 text-[#137fec]"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default function BookingForm({ service }: { service: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTermsOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data: BookingSchema) => {
    const url = generateWhatsAppLink(data, service);
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg border border-slate-100 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 mb-7">
          <div>
            <h2 className="text-lg font-bold text-[#101922]">
              Modern Car Wash
            </h2>
            <p className="text-xs text-slate-400 font-medium">Booking Online</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Nama */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
              Nama Lengkap
            </label>
            <input
              placeholder="Cth: Azis"
              {...register("nama")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f6f7f8] text-[#101922] text-sm font-medium placeholder:text-slate-300 focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 focus:bg-white transition-all"
            />
            {errors.nama && (
              <p className="text-red-500 text-sm">{errors.nama.message}</p>
            )}
          </div>

          {/* No WA */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
              Nomor WhatsApp
            </label>
            <input
              placeholder="08xxxxxxxxxx"
              type="tel"
              {...register("whatsapp")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f6f7f8] text-[#101922] text-sm font-medium placeholder:text-slate-300 focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 focus:bg-white transition-all"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
            )}
          </div>

          {/* Nopol */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
              Nomor Plat
            </label>
            <input
              placeholder="Cth: KH 1234 AB"
              {...register("nopol")}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-[#f6f7f8] text-[#101922] text-sm font-medium uppercase placeholder:text-slate-300 placeholder:normal-case focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 focus:bg-white transition-all"
            />
            {errors.nopol && (
              <p className="text-red-500 text-sm">{errors.nopol.message}</p>
            )}
          </div>

          <div className="border-t border-slate-100" />

          {/* Tanggal & Jam */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Tanggal
              </label>
              <input
                type="date"
                {...register("tanggal")}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-[#f6f7f8] text-[#101922] text-sm font-medium focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 focus:bg-white transition-all"
              />
              {errors.tanggal && (
                <p className="text-red-500 text-sm">{errors.tanggal.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Jam (order terakhir 15.30)
              </label>
              <input
                type="time"
                {...register("jam")}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-[#f6f7f8] text-[#101922] text-sm font-medium focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 focus:bg-white transition-all"
              />
              {errors.jam && (
                <p className="text-red-500 text-sm">{errors.jam.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-1 py-3.5 rounded-xl bg-linear-to-r from-[#137fec] to-[#1a99ff] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_4px_18px_rgba(19,127,236,0.35)] hover:shadow-[0_6px_24px_rgba(19,127,236,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            <span className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
              <WhatsAppIcon />
            </span>
            Kirim Booking via WhatsApp
          </button>

          {/* Info box */}
          <div className="flex items-start gap-2.5 bg-[#137fec]/7 border border-[#137fec]/20 rounded-xl px-3.5 py-3">
            <InfoIcon />
            <p className="text-xs text-blue-700 font-medium leading-relaxed">
              Booking akan dikirim ke WhatsApp Admin Car Wash untuk konfirmasi
              ketersediaan jam. Harap membaca {""}{" "}
              <button
                type="button"
                onClick={() => setIsTermsOpen(true)}
                className="font-semibold underline decoration-blue-700 underline-offset-2 transition-colors hover:text-[#0f6bcc]"
              >
                syarat dan ketentuan
              </button>
            </p>
          </div>
        </form>
      </div>

      <TermAndCondition
        open={isTermsOpen}
        onCloseAction={() => setIsTermsOpen(false)}
      />
    </>
  );
}
