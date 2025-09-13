"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { useFormContext } from "@/context/FormContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<{ name?: string; email?: string; tel?: string }>({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; tel?: string } = {};

    // Name validation
    if (!formData.name?.trim()) {
      newErrors.name = "This field is required";
    }

    // Email validation
    if (!formData.email?.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone validation
    if (!formData.tel?.trim()) {
      newErrors.tel = "This field is required";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.tel)) {
      newErrors.tel = "Enter a valid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // ✅ valid only if no errors
  };

  const handleNext = () => {
    if (validateForm()) {
      router.push("/select");
    }
  };

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
            <div className="flex justify-between">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              {errors.name && <div className="text-red-400 text-sm">{errors.name}</div>}
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ name: e.target.value })}
              placeholder="e.g. Stephen King"
              className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              {errors.email && <div className="text-red-400 text-sm">{errors.email}</div>}
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              placeholder="e.g. stephenking@lorem.com"
              className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="tel" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              {errors.tel && <div className="text-red-400 text-sm">{errors.tel}</div>}
            </div>
            <input
              type="tel"
              id="tel"
              value={formData.tel}
              onChange={(e) => setFormData({ tel: e.target.value })}
              placeholder="e.g. +1 234 567 890"
              className={`mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.tel ? "border-red-400 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>
        </form>
      </div>

      {/* Footer Navigation */}
      <Footer goback="" left="Back" right="Next Step" onRightClick={handleNext} />
    </div>
  );
}
