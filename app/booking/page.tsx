"use client";

import { useSearchParams } from "next/navigation";
import BookingForm from "./components/bookingform";
import { Suspense } from "react";

function BookingPageContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";

  return <BookingForm service={service} />;
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] flex items-center justify-center px-4 py-10">
      <Suspense>
        <BookingPageContent />
      </Suspense>
    </div>
  );
}
