"use client";

import { useSearchParams } from "next/navigation";
import BookingForm from "./components/bookingform";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";

  return (
    <div className="min-h-screen bg-[#f6f7f8] flex items-center justify-center px-4 py-10">
      <BookingForm service={service} />
    </div>
  );
}
