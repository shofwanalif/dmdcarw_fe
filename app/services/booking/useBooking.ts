"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingService } from "./booking.service";
import type {
  CreateBookingRequest,
  UpdateBookingRequest,
} from "./booking.service";

export function useGetBookings() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: () => bookingService.getBookings(),
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateBookingRequest) =>
      bookingService.createBooking(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useUpdateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateBookingRequest) => {
      return bookingService.updateBooking(data.id!, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => bookingService.deleteBooking(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}

export function useSearchBooking(nopol: string) {
  return useQuery({
    queryKey: ["searchBooking", nopol],
    queryFn: () => bookingService.searchBooking(nopol),
    enabled: nopol.trim().length > 0,
  });
}

export function useGetBookingToday() {
  return useQuery({
    queryKey: ["bookingToday"],
    queryFn: () => bookingService.getBookingToday(),
  });
}
