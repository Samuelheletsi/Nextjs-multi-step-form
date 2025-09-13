"use client";
import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ThankYouPage() {
  const showFooter = false; // set to true if you want a footer

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
        Thanks for confirming your subscription! We hope you have fun using our platfrom. if you aever need support, please feel free to email us at support@email.com
      </p>

      {showFooter && (
        <Footer goback="/" link="/" left="Back" right="" />
      )}
    </div>
  );
}
