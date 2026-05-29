"use client";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/context/SettingsContext";
import { Check } from "lucide-react";

const ColorSettings = () => {
  const { currentColor, changeColor } = useSettings();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <h3 className="text-xs font-bold tracking-[5px] text-blue-950 uppercase">
        Color
      </h3>

      <div className="flex gap-4">
        <Button
          type="button"
          onClick={() => changeColor("red")}
          className="w-10 h-10 rounded-full border-none bg-red-400 hover:bg-red-400/90 text-blue-950 flex items-center justify-center cursor-pointer"
        >
          {currentColor === "red" && <Check className="w-5 h-5" />}
        </Button>

        <Button
          type="button"
          onClick={() => changeColor("cyan")}
          className="w-10 h-10 rounded-full border-none bg-cyan-300 hover:bg-cyan-300/90 text-blue-950 flex items-center justify-center cursor-pointer"
        >
          {currentColor === "cyan" && <Check className="w-5 h-5" />}
        </Button>

        <Button
          type="button"
          onClick={() => changeColor("purple")}
          className="w-10 h-10 rounded-full border-none bg-purple-400 hover:bg-purple-400/90 text-blue-950 flex items-center justify-center cursor-pointer"
        >
          {currentColor === "purple" && <Check className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  );
};

export default ColorSettings;
