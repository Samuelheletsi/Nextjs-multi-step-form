import type { Metadata } from "next";
import "../styles/globals.css";
import Aside from "@/components/Aside";
import { FormProvider } from "@/context/FormContext";

export const metadata: Metadata = {
  title: "Form Steps",
  description: "Frontend Mentor - Next.js Multi-Step Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cyan-100 min-h-screen flex justify-center items-center p-4">
        <FormProvider>
          <main
            className="
              bg-white w-full max-w-6xl 
              min-h-[500px] 
              rounded-xl shadow-lg 
              flex flex-col lg:flex-row 
              relative overflow-hidden
            "
          >
            {/* Sidebar / Background */}
            <div className="relative w-full lg:w-auto">
              <Aside />

              {/* Page content overlays Aside on small screens */}
              <section
                className="
                  absolute top-28 left-1/2 -translate-x-1/2
                  w-[90%] bg-white rounded-lg shadow-lg p-6
                  lg:static lg:translate-x-0 lg:top-0 lg:left-0 
                  lg:w-auto lg:flex-1 lg:rounded-none lg:shadow-none
                  flex flex-col justify-between
                "
              >
                {children}
              </section>
            </div>
          </main>
        </FormProvider>
      </body>
    </html>
  );
}
