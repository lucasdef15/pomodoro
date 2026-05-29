"use client";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/context/SettingsContext";
import { FontModes } from "@/constants/fontModes";

const FontSettings = () => {
  const { currentFont, changeFont } = useSettings();

  const fonts: FontModes[] = ["kumbh", "roboto", "mono"];

  const fontClasses: Record<FontModes, string> = {
    kumbh: "font-theme-kumbh",
    roboto: "font-theme-roboto",
    mono: "font-theme-space",
  };

  return (
    <div className="border-b border-gray-100 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <h3 className="text-xs font-bold tracking-[5px] text-blue-950 uppercase">
        Font
      </h3>

      <div className="flex gap-4">
        {fonts.map((font) => (
          <Button
            key={font}
            type="button"
            onClick={() => changeFont(font)}
            className={`w-10 h-10 rounded-full font-bold transition-all border-none ${fontClasses[font]} ${
              currentFont === font
                ? "bg-blue-950 text-white"
                : "bg-blue-50 text-blue-950/70 hover:bg-gray-200"
            }`}
          >
            Aa
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FontSettings;
