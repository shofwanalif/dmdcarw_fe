import { api } from "../../lib/axios";

export type CreateBookingRequest = {
  id?: number;
  nama: string;
  whatsapp: string;
  nopol: string;
  service?: string;
  tanggal: string;
  jam: string;
  status?: string;
};

export type Booking = {
  id: number;
  nama: string;
  whatsapp: string;
  nopol: string;
  service: string;
  tanggal: string;
  jam: string;
  status?: string;
};

export type BookingListResponse = {
  data: Booking[];
};

export type UpdateBookingRequest = Partial<CreateBookingRequest>;

export const bookingService = {
  getBookings: async () => {
    const res = await api.get<BookingListResponse>(
      "/api/booking/get-all-bookings",
    );
    return res.data;
  },

  createBooking: async (data: CreateBookingRequest) => {
    return await api.post("/api/booking/create-booking", data);
  },

  updateBooking: async (id: number, data: UpdateBookingRequest) => {
    return await api.put(`/api/booking/update-booking/${id}`, data);
  },

  deleteBooking: async (id: number) => {
    return await api.delete(`/api/booking/delete-booking/${id}`);
  },

  searchBooking: async (nopol: string) => {
    const res = await api.get<BookingListResponse>(
      `/api/booking/search-bookings?nopol=${nopol}`,
    );
    return res.data;
  },

  getBookingToday: async () => {
    const res = await api.get<BookingListResponse>(
      "/api/booking/get-booking-today",
    );
    return res.data;
  },
};
