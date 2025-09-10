import type { Metadata } from "next";
import "../styles/globals.css";
import Aside from "@/components/Aside";

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
        <main className="bg-white w-full max-w-6xl min-h-[500px] rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
          {/* Sidebar */}
          <Aside />

          {/* Page content */}
          <section className="flex-1 p-6 flex flex-col justify-between">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
