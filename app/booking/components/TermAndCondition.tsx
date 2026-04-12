"use client";

type TermAndConditionProps = {
  open: boolean;
  onCloseAction: () => void;
};

const bookingTerms: string[] = [
  "Pastikan nomor WhatsApp yang diisi aktif dan benar agar admin dapat menghubungi Anda.",
  "Pelanggan diwajibkan datang minimal 10 menit sebelum jadwal booking.",
  "Toleransi keterlambatan maksimal 10 menit dari jam booking. Lebih dari itu, jadwal dapat digeser sesuai antrean.",
  "Order terakhir untuk booking online adalah pukul 15.30 WIB.",
  "Booking dianggap valid setelah mendapatkan konfirmasi ketersediaan dari Admin Car Wash melalui WhatsApp.",
  "Pembatalan booking harap diinformasikan minimal 2 jam sebelum jadwal agar slot dapat diberikan ke pelanggan lain.",
];

export default function TermAndCondition({
  open,
  onCloseAction,
}: TermAndConditionProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ease-out ${
        open
          ? "pointer-events-auto bg-black/40 opacity-100"
          : "pointer-events-none bg-black/0 opacity-0"
      }`}
      onClick={onCloseAction}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-terms-title"
    >
      <div
        className={`w-full max-w-lg rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl sm:p-7 transform transition-all duration-500 ease-out ${
          open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3
            id="booking-terms-title"
            className="text-lg font-bold text-[#101922]"
          >
            Syarat & Ketentuan Booking
          </h3>
          <button
            type="button"
            onClick={onCloseAction}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
            aria-label="Tutup modal syarat dan ketentuan"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
          </button>
        </div>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          {bookingTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
