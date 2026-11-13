import { Afacad_Flux, Inter, Libre_Caslon_Text, Manrope } from "next/font/google";

export const afacadFlux = Afacad_Flux({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Site type: Libre Caslon Text for headlines (a real bold, so titles read with authority) and Inter for reading.
export const caslonDisplay = Libre_Caslon_Text({
  variable: "--font-home-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-home-sans",
  subsets: ["latin"],
  display: "swap",
});
