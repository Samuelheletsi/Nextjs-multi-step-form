"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useFormContext } from "@/context/FormContext";

export default function SelectPage() {
  const { formData, setFormData } = useFormContext();
  const [billing, setBilling] = useState(formData.billing || "yearly");

  useEffect(() => {
    setFormData({ ...formData, billing });
  }, [billing]);

  const handleSelect = (plan: string, price: string) => {
    setFormData({ ...formData, plan, price, billing });
  };

  return (
    <div className="flex flex-col justify-between h-full lg:pr-18">
      <div>
        <h1 className="text-2xl font-bold mb-2">Select your plan</h1>
        <p className="text-gray-500 mb-6">
          You have the option of monthly and yearly billing
        </p>

        {/* Plans */}
        <form className="grid gap-4 sm:grid-cols-3 mb-11">
          {/* Arcade */}
          <div
            onClick={() =>
              handleSelect("Arcade", billing === "yearly" ? "$90/yr" : "$9/mo")
            }
            className={`cursor-pointer border rounded-lg p-4 hover:border-blue-400 ${
              formData.plan === "Arcade"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <Image
              src="/images/icon-arcade.svg"
              alt="Arcade"
              width={30}
              height={40}
            />
            <h3 className="font-bold mt-5">Arcade</h3>
            <p>{billing === "yearly" ? "$90/yr" : "$9/mo"}</p>
            {billing === "yearly" && (
              <span className="text-xs text-blue-600">2 months free</span>
            )}
          </div>

          {/* Advanced */}
          <div
            onClick={() =>
              handleSelect(
                "Advanced",
                billing === "yearly" ? "$120/yr" : "$12/mo"
              )
            }
            className={`cursor-pointer border rounded-lg p-4 hover:border-blue-400 ${
              formData.plan === "Advanced"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <Image
              src="/images/icon-advanced.svg"
              alt="Advanced"
              width={30}
              height={40}
            />
            <h3 className="font-bold mt-5">Advanced</h3>
            <p>{billing === "yearly" ? "$120/yr" : "$12/mo"}</p>
            {billing === "yearly" && (
              <span className="text-xs text-blue-600">2 months free</span>
            )}
          </div>

          {/* Pro */}
          <div
            onClick={() =>
              handleSelect("Pro", billing === "yearly" ? "$150/yr" : "$15/mo")
            }
            className={`cursor-pointer border rounded-lg p-4 hover:border-blue-400 ${
              formData.plan === "Pro"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <Image
              src="/images/icon-pro.svg"
              alt="Pro"
              width={30}
              height={40}
            />
            <h3 className="font-bold mt-5">Pro</h3>
            <p>{billing === "yearly" ? "$150/yr" : "$15/mo"}</p>
            {billing === "yearly" && (
              <span className="text-xs text-blue-600">2 months free</span>
            )}
          </div>
        </form>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 bg-gray-100 mt-6 p-2 rounded-lg">
          <span
            className={billing === "monthly" ? "font-bold text-blue-600" : ""}
          >
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={billing === "yearly"}
              onChange={() =>
                setBilling(billing === "yearly" ? "monthly" : "yearly")
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-blue-950 peer-checked:bg-blue-950 rounded-full peer transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
          </label>
          <span
            className={billing === "yearly" ? "font-bold text-blue-600" : ""}
          >
            Yearly
          </span>
        </div>
      </div>

      {/* Footer Navigation */}
      <Footer goback="/" link="/pick" left="Go Back" right="Next Step" />
    </div>
  );
}
