import "./globals.css";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
export const metadata = {
  title: "MediCare Plus | Modern Healthcare Platform",
  description:
    "Book appointments with top doctors and get online consultations instantly.",
  openGraph: {
    title: "MediCare Plus",
    description: "Modern healthcare platform",
    type: "website",
  },
};