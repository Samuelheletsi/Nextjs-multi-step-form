"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import Footer from "@/components/Footer";

export default function FinishPage() {
  const { formData } = useFormContext();

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Summary</h1>
        <p className="text-gray-500 mb-6">
          Review your details before confirming.
        </p>

        {/* Display form data */}
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-600">Name</p>
            <p className="text-lg">{formData.name || "Not provided"}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Email</p>
            <p className="text-lg">{formData.email || "Not provided"}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Phone</p>
            <p className="text-lg">{formData.tel || "Not provided"}</p>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <Footer goback="/pick" link="/thank-you" left="Back" right="Confirm" />
    </div>
  );
}
