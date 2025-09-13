"use client";
import React from "react";
import Footer from "@/components/Footer";
import { useFormContext } from "@/context/FormContext";
import { useRouter } from "next/navigation";

export default function FinishPage() {
  const { formData } = useFormContext();
  const router = useRouter();

  const handleConfirm = () => {
    const { name, email, tel, plan, price } = formData;
    const allAddonsSelected = formData.addons?.length >= 0;

    if (!name || !email || !tel || !plan || !price || !allAddonsSelected) {
      alert("Please complete all required fields and selections!");
      return;
    }
    router.push("/thank-you");
  };

  const billing = formData.billing || "monthly";
  const planPrice = formData.price ? parseInt(formData.price.replace(/\D/g, "")) : 0;
  const addonsTotal = (formData.addons || []).reduce((acc, a) => acc + parseInt(a.price.replace(/\D/g, "") || "0"), 0);
  const totalPrice = planPrice + addonsTotal;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Summary</h1>
        <p>Review your selections:</p>

        <div className="mt-4">
          <p><strong>Plan:</strong> {formData.plan} ({billing}) - {formData.price}</p>
          {formData.addons?.map((addon) => (
            <p key={addon.name}>{addon.name} - {addon.price}</p>
          ))}
          <p className="mt-2"><strong>Total:</strong> ${totalPrice}/{billing === "yearly" ? "yr" : "mo"}</p>
        </div>
      </div>

      <Footer goback="/pick" left="Go Back" right="Confirm" onRightClick={handleConfirm} />
    </div>
  );
}
