"use client";

import BookingSection from "@/components/sections/BookingSection";

export default function BookPage() {
  return (
    <div className="pt-8">
      {/* Split in-person booking and remote editing request forms */}
      <BookingSection />
    </div>
  );
}
