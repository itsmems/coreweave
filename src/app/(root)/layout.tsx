import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
