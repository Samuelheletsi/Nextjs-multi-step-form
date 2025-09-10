import React from "react";
import Footer from "@/components/Footer";

export default function SelectPage() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Step 2: Select Plan</h1>
        <p>Form content for Step 2 goes here.</p>
      </div>

      <Footer goback="/" link="/pick" left="Go Back" right="Next Step" />
    </div>
  );
}
