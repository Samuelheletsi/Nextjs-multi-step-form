"use client";
import React from "react";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  const showFooter = false; // set to true if you want a footer

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>
      <p className="text-gray-600 mb-6">
        Your information has been successfully submitted.
      </p>

      {showFooter && (
        <Footer goback="/" link="/" left="Back" right="" />
      )}
    </div>
  );
}
