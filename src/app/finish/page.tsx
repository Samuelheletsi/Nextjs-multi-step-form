import React from "react";
import Footer from "@/components/Footer";

export default function FinishPage() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">Step 4: Summary</h1>
        <p>Form content for Step 4 goes here.</p>
      </div>

      <Footer goback="/pick" link="/#" left="Go Back" right="Confirm" />
    </div>
  );
}
