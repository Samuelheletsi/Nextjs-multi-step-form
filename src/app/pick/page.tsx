"use client";
import React from "react";
import Footer from "@/components/Footer";
import { useFormContext } from "@/context/FormContext";

export default function PickPage() {
  const { formData, setFormData } = useFormContext();
  const billing = formData.billing || "monthly"; // default

  const handleChange = (addon: string, monthly: string, yearly: string) => {
    let updatedAddons = [...(formData.addons || [])];
    const price = billing === "yearly" ? yearly : monthly;

    if (updatedAddons.some((a) => a.name === addon)) {
      updatedAddons = updatedAddons.filter((a) => a.name !== addon);
    } else {
      updatedAddons.push({ name: addon, price });
    }

    setFormData({ ...formData, addons: updatedAddons });
  };

  const isChecked = (addon: string) =>
    formData.addons?.some((a) => a.name === addon);

  const getLabelClass = (addon: string) =>
    `flex justify-between items-center border p-3 rounded-lg cursor-pointer transition ${
      isChecked(addon)
        ? "border-blue-500 bg-blue-50"
        : "border-gray-300 hover:border-blue-400"
    }`;

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold">Pick Add-Ons</h1>
        <p className="text-gray-500">
          Add-ons help enhance your gaming experience
        </p>

        <form className="flex flex-col my-6 gap-4">
          {/* Addon 1 */}
          <label className={getLabelClass("Online Service")}>
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                checked={isChecked("Online Service")}
                onChange={() =>
                  handleChange("Online Service", "+$1/mo", "+$10/yr")
                }
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">Online Service</h3>
                <p className="text-sm text-gray-500">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <span className="text-blue-600">
              {billing === "yearly" ? "+$10/yr" : "+$1/mo"}
            </span>
          </label>

          {/* Addon 2 */}
          <label className={getLabelClass("Larger Storage")}>
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                checked={isChecked("Larger Storage")}
                onChange={() =>
                  handleChange("Larger Storage", "+$2/mo", "+$20/yr")
                }
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">Larger Storage</h3>
                <p className="text-sm text-gray-500">Extra 1TB of cloud save</p>
              </div>
            </div>
            <span className="text-blue-600">
              {billing === "yearly" ? "+$20/yr" : "+$2/mo"}
            </span>
          </label>

          {/* Addon 3 */}
          <label className={getLabelClass("Customizable Profile")}>
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                checked={isChecked("Customizable Profile")}
                onChange={() =>
                  handleChange(
                    "Customizable Profile",
                    "+$2/mo",
                    "+$20/yr"
                  )
                }
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">Customizable Profile</h3>
                <p className="text-sm text-gray-500">
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <span className="text-blue-600">
              {billing === "yearly" ? "+$20/yr" : "+$2/mo"}
            </span>
          </label>
        </form>
      </div>

      <Footer goback="/select" link="/finish" left="Go Back" right="Next Step" />
    </div>
  );
}
