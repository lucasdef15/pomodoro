"use client";
import { FontModes } from "@/constants/fontModes";
import { createContext, useContext, useState, type ReactNode } from "react";

type ColorModes = "red" | "cyan" | "purple";

type SettingsData = {
  currentFont: FontModes;
  changeFont: (font: FontModes) => void;
  currentColor: ColorModes;
  changeColor: (color: ColorModes) => void;
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  setPomodoroTime: (time: number) => void;
  setShortBreakTime: (time: number) => void;
  setLongBreakTime: (time: number) => void;
};

const SettingsContext = createContext<SettingsData | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [currentFont, setCurrentFont] = useState<FontModes>("kumbh");
  const [currentColor, setCurrentColor] = useState<ColorModes>("red");

  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const changeFont = (font: FontModes) => setCurrentFont(font);
  const changeColor = (color: ColorModes) => setCurrentColor(color);

  return (
    <SettingsContext.Provider
      value={{
        currentFont,
        changeFont,
        currentColor,
        changeColor,
        pomodoroTime,
        shortBreakTime,
        longBreakTime,
        setPomodoroTime,
        setShortBreakTime,
        setLongBreakTime,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettings must be used inside SettingsProvider");
  return context;
};
