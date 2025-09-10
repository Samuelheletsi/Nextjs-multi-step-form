import React from "react";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Step 1: Your Info</h1>
        <p>Form content for Step 1 goes here.</p>
      </div>

      <Footer goback="" link="/select" left="Back" right="Next Step" />
    </div>
  );
}
