"use client";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useFormContext } from "@/context/FormContext";

export default function ThankYouPage() {
  const { resetFormData } = useFormContext();
  const showFooter = false;

  useEffect(() => {
    resetFormData(); // clear all form data when thank you page loads
  }, [resetFormData]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <Image
        src="/images/icon-thank-you.svg"
        alt="thanks"
        width={50}
        height={50}
      />
      <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>
      <p className="text-gray-600 mb-6 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@email.com
      </p>

      {showFooter && <Footer goback="/" link="/" left="Back" right="" />}
    </div>
  );
}
