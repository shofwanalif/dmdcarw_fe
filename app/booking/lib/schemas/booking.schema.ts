import { z } from "zod";

export const bookingSchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  whatsapp: z.string().min(10, "Nomor tidak valid"),
  tanggal: z.string().min(1, "Tanggal harus diisi"),
  jam: z.string().min(1, "Jam harus diisi"),
  nopol: z.string().min(1, "Nomor polisi harus diisi"),
});

export type BookingSchema = z.infer<typeof bookingSchema>;
