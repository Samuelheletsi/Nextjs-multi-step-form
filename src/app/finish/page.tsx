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

    // ✅ Fix validation
    if (!name || !email || !tel || !plan || !price) {
      alert("Please complete all required fields and selections!");
      return;
    }

    router.push("/thank-you");
  };

  const billing = formData.billing || "monthly";

  const planPrice = formData.price
    ? parseInt(formData.price.replace(/\D/g, ""))
    : 0;

  const addonsTotal = (formData.addons || []).reduce(
    (acc, a) => acc + parseInt(a.price.replace(/\D/g, "") || "0"),
    0
  );

  const totalPrice = planPrice + addonsTotal;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Finishing Up</h1>
        <p>Double check everything looks OK before confirming.</p>

        <div className="mt-4 p-4 rounded-md ">
          {/* Plan info */}
          <div className="flex justify-between items-center pb-3 border-b border-gray-300">
            <div>
              <h3 className="font-semibold capitalize">
                {formData.plan} ({billing})
              </h3>
              <button
                onClick={() => router.push("/select")}
                className="text-sm text-blue-700 underline"
              >
                Change
              </button>
            </div>
            <p className="font-bold">{formData.price}</p>
          </div>

          {/* Add-ons */}
          <div className="mt-3 space-y-2">
            {formData.addons?.map((addon) => (
              <div
                key={addon.name}
                className="flex justify-between text-sm text-gray-600"
              >
                <p>{addon.name}</p>
                <p>{addon.price}</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300">
            <p>Total (per {billing === "yearly" ? "year" : "month"})</p>
            <p className="font-bold text-blue-700">
              ${totalPrice}/{billing === "yearly" ? "yr" : "mo"}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <Footer
        goback="/pick"
        left="Go Back"
        right="Confirm"
        onRightClick={handleConfirm}
      />
    </div>
  );
}
