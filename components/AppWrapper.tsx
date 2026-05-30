"use client";

import { useSettings } from "@/context/SettingsContext";
import type { ReactNode } from "react";

export default function AppWrapper({ children }: { children: ReactNode }) {
  const { currentFont, currentColor } = useSettings();

  const fontClasses: Record<string, string> = {
    kumbh: "font-theme-kumbh",
    roboto: "font-theme-roboto",
    mono: "font-theme-space",
  };

  const colorClasses = {
    red: "color-theme-red",
    cyan: "color-theme-cyan",
    purple: "color-theme-purple",
  };

  return (
    <div
      className={`${fontClasses[currentFont]} ${colorClasses[currentColor]} min-h-screen transition-all duration-300`}
    >
      {children}
    </div>
  );
}
