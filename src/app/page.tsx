"use client";
import React from "react";
import Footer from "@/components/Footer";
import { useFormContext } from "@/context/FormContext";

export default function Page() {
  const { formData, setFormData } = useFormContext();

  return (
    <div className="flex flex-col justify-between h-full lg:pr-18">
      {/* Form Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Your Personal Info</h1>
        <p className="text-gray-500 mb-6">
          Provide your name, email address, and phone number.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ name: e.target.value })}
              placeholder="e.g. Stephen King"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              placeholder="e.g. stephenking@lorem.com"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="tel" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="tel"
              value={formData.tel}
              onChange={(e) => setFormData({ tel: e.target.value })}
              placeholder="e.g. +1 234 567 890"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>

      {/* Footer Navigation */}
      <Footer goback="" link="/select" left="Back" right="Next Step" />
    </div>
  );
}
