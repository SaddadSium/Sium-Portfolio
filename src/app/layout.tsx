import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.S.M. Sium | Full-Stack Engineer & Cinematographer",
  description:
    "Portfolio of A.S.M. Sium - Crafting digital applications and capturing cinematic visual stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-abyss-brand text-gray-100 antialiased min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
