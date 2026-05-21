import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YMG Legal — Legal Marketing & Intake",
  description:
    "YMG Legal is a premier legal marketing firm with 15+ years of experience helping law firms grow with a steady pipeline of qualified cases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
