import type { Metadata } from "next";
import { Kumbh_Sans, Roboto_Slab, Space_Mono, Geist } from "next/font/google";
import { SettingsProvider } from "@/context/SettingsContext";
import { PomodoroProvider } from "@/context/PomodoroContext";
import AppWrapper from "@/components/AppWrapper";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["400", "700", "900", "300", "500", "600", "800"],
});
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900", "300", "500", "600", "800"],
});
const spaceMono = Space_Mono({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-br"
      className={cn(
        "h-full bg-main ",
        kumbhSans.variable,
        robotoSlab.variable,
        spaceMono.variable,
        geist.variable,
      )}
    >
      <body className="h-full">
        <SettingsProvider>
          <PomodoroProvider>
            <AppWrapper>{children}</AppWrapper>
          </PomodoroProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
