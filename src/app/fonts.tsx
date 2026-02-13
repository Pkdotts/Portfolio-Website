import { Barlow, Encode_Sans_Expanded, Quicksand } from "next/font/google";

export const barlow = Barlow({
    subsets: ["latin"],
    variable: "--font-barlow",
    weight: "900"
});

export const encodeSans = Encode_Sans_Expanded({
    subsets: ["latin"],
    variable: "--font-encode",
    weight: "100"
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});