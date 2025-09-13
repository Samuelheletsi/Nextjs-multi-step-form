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
              min-h-[600px] 
              rounded-xl shadow-lg 
              flex flex-col lg:flex-row
              overflow-hidden
            "
          >
            {/* Sidebar */}
            <Aside />

            {/* Content */}
            <section
              className="
                w-full lg:flex-1
                -mt-16 lg:mt-0   /* overlap the sidebar image slightly on small screens */
                bg-white rounded-lg shadow-lg 
                p-6
                lg:rounded-none lg:shadow-none
                flex flex-col justify-between
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
