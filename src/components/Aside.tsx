"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {
  const pathname = usePathname();

  const steps = [
    { num: 1, label: "YOUR INFO", text: "STEP 1", href: "/" },
    { num: 2, label: "SELECT PLAN", text: "STEP 2", href: "/select" },
    { num: 3, label: "ADD-ONS", text: "STEP 3", href: "/pick" },
    { num: 4, label: "SUMMARY", text: "STEP 4", href: "/finish" },
  ];

  return (
    <aside
      className="
        relative
        flex flex-row lg:flex-col
        justify-center lg:justify-start items-center lg:items-start
        w-full lg:w-72
        h-[160px] lg:h-auto   /* lowered mobile height */
        -pt-2 lg:pt-10        /* reduce top padding on mobile */
        px-6 lg:px-8 
        text-white
        bg-[url('/images/bg-sidebar-mobile.svg')] 
        lg:bg-[url('/images/bg-sidebar-desktop.svg')]
        bg-no-repeat bg-cover 
        lg:rounded-l-xl
      "
    >
      <div
        className="
          flex flex-row lg:flex-col gap-6 lg:gap-8
          -mt-18 lg:mt-0   /* shift circles up on small screens */
        "
      >
        {steps.map((step) => {
          const isActive = pathname === step.href;

          const bgClass = isActive
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white hover:bg-white hover:text-black";

          return (
            <Link
              key={step.num}
              href={step.href}
              className="flex items-center lg:items-start gap-3"
            >
              {/* Step circle */}
              <button
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full font-bold border transition ${bgClass}`}
              >
                {step.num}
              </button>

              {/* Step text (desktop only) */}
              <div className="hidden lg:flex flex-col leading-tight">
                <span className="text-blue-200 text-[10px] tracking-widest uppercase">
                  {step.text}
                </span>
                <span className="text-xs font-extrabold tracking-wide">
                  {step.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
