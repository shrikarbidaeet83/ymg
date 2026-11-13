import type { Metadata } from "next";
import { afacadFlux, inter, manrope, caslonDisplay } from "@/lib/fonts";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import HeadingGlue from "@/components/layout/HeadingGlue";
import "./globals.css";

export const metadata: Metadata = {
  title: "YMG Legal",
  description: "Full Funnel Legal Growth Solutions — From Intake to Retainer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afacadFlux.variable} ${manrope.variable} ${caslonDisplay.variable} ${inter.variable}`}
    >
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileActionBar />
        </SmoothScroll>
        <HeadingGlue />
      </body>
    </html>
  );
}
