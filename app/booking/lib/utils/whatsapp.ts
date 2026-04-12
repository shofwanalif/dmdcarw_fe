import { BookingSchema } from "../schemas/booking.schema";

export const generateWhatsAppLink = (data: BookingSchema, service: string) => {
  const message = `
BOOKING CAR WASH

- Nama: ${data.nama}
- WhatsApp: ${data.whatsapp}
- Layanan: ${service}
- Tanggal: ${data.tanggal}
- Nomor Polisi: ${data.nopol}
- Jam: ${data.jam}

Mohon konfirmasi booking ini. Terima kasih!
  `;

  const phone = "6281348580189";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
