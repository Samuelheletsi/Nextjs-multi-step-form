import React from "react";
import Footer from "@/components/Footer";

export default function PickPage() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Step 3: Add-Ons</h1>
        <p>Form content for Step 3 goes here.</p>
      </div>

      <Footer goback="/select" link="/finish" left="Go Back" right="Next Step" />
    </div>
  );
}
