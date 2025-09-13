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
              bg-cyan-100 sm:bg-white
              w-full max-w-6xl 
              min-h-[600px] 
              rounded-xl sm:shadow-lg 
              flex flex-col lg:flex-row
              lg:gap-6
              relative overflow-hidden
            "
          >
            {/* Sidebar / Mobile Header */}
            <Aside />

            {/* Page Content */}
            <section
              className="
                relative
                w-[90%] max-w-md mx-auto
                -mt-20 sm:-mt-24   /* lift card over header on small screens */
                bg-white rounded-lg shadow-lg 
                p-6
                lg:static lg:mt-0 lg:mx-0 lg:w-auto lg:flex-1
                lg:rounded-none lg:shadow-none
                flex flex-col justify-between
                z-10
              "
            >
              {children}
            </section>
          </main>
        </FormProvider>
      </body>
    </html>
  );
}
