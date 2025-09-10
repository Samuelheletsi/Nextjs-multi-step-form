"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {
  const pathname = usePathname();

  const steps = [
    { num: 1, label: "YOUR INFO", href: "/" },
    { num: 2, label: "SELECT PLAN", href: "/select" },
    { num: 3, label: "ADD-ONS", href: "/pick" },
    { num: 4, label: "SUMMARY", href: "/finish" },
  ];

  return (
    <aside
      className="
        py-10
        w-full lg:w-80
        h-[250px] lg:h-full
        flex flex-row lg:flex-col justify-center items-center
        lg:items-start
        text-white
        bg-[url('/images/bg-sidebar-mobile.svg')] lg:bg-[url('/images/bg-sidebar-desktop.svg')]
        bg-no-repeat bg-contain
        px-4 lg:px-6
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
            className="flex flex-col items-center lg:items-start m-2 lg:m-4"
          >
            <button
              className={`
                w-10 h-10 lg:w-12 lg:h-12
                rounded-full font-bold border transition
                ${bgClass}
              `}
            >
              {step.num}
            </button>
            <div className="hidden lg:block mt-2 text-xs font-extrabold">
              {step.label}
            </div>
          </Link>
        );
      })}
    </aside>
  );
}
