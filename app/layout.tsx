import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratham Hegde',
  description: 'The official portfolio page for Pratham Hegde',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-gray-200 antialiased">
        <Navbar />
        <main className="md:ml-34">
          {children}
        </main>
      </body>
    </html>
  );
}

