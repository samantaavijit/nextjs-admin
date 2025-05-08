import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import StyledComponentsRegistry from "./registry";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "TLA - Transform Your Future",
    default: "TLA - Transform Your Future",
  },
  description: "Learning with TLA",
};

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
