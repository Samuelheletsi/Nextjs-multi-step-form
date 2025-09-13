"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {
  const pathname = usePathname();

  const steps = [
    { num: 1, label: "YOUR INFO", text:"STEP 1", href: "/" },
    { num: 2, label: "SELECT PLAN", text:"STEP 2", href: "/select" },
    { num: 3, label: "ADD-ONS", text:"STEP 3", href: "/pick" },
    { num: 4, label: "SUMMARY", text:"STEP 4",href: "/finish" },
  ];

  return (
    <aside
      className="
        flex flex-row lg:flex-col
        justify-center lg:justify-start items-center lg:items-start
        w-full lg:w-72
        h-[180px] lg:h-auto
        py-6 lg:py-10
        px-4 lg:px-8
        text-white
        bg-[url('/images/bg-sidebar-mobile.svg')] lg:bg-[url('/images/bg-sidebar-desktop.svg')]
        bg-no-repeat bg-cover lg:rounded-l-xl
      "
    >
      <div className="flex flex-row lg:flex-col gap-6">
        {steps.map((step) => {
          const isActive = pathname === step.href;

          const bgClass = isActive
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white hover:bg-white hover:text-black";

          return (
            <Link
              key={step.num}
              href={step.href}
              className="flex  items-center lg:items-start gap-2"
            >
              <button
                className={`
                  w-10 h-10  
                  rounded-full font-bold border transition
                  ${bgClass}
                `}
              >
                {step.num}
              </button>
      
               <div className="flex flex-col">
                       <div className="text-blue-200 hidden lg:block text-[10px]">
                      {step.text}
                   </div>
                      <div className="hidden lg:block text-xs font-extrabold tracking-wide">
                      {step.label}
                    </div>
                     
               </div>
              
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
