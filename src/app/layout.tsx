import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'; // Adjust path as necessary
import Footer from "@/components/Footer";
import { UserProvider } from "@/context/UserContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prongs of Wisdom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-blue-100`}>
        <UserProvider>
          <Navbar />
          <div className="flex-grow">{children} </div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
