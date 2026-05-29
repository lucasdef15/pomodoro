"use client";
import Button from "./Button";
import type { TimerMode } from "@/types/timer";

type TimerModeConfig = {
  label: string;
};

export const timerModes: Record<TimerMode, TimerModeConfig> = {
  pomodoro: {
    label: "pomodoro",
  },

  shortBreak: {
    label: "short break",
  },

  longBreak: {
    label: "long break",
  },
};

type TabSelectorProps = {
  currentMode: TimerMode;

  onChangeMode: (mode: TimerMode) => void;
};

const TabSelector = ({ currentMode, onChangeMode }: TabSelectorProps) => {
  return (
    <section className="w-full p-400  flex items-center justify-center">
      <div className="w-full max-w-[380px] min-w-[300px] flex flex-col items-center gap-700">
        <h1 className="text-white text-3xl font-semibold">Pomodoro</h1>

        <div className="w-full bg-blue-950 p-200 rounded-full flex items-center justify-between gap-200 md:gap-400">
          {Object.entries(timerModes).map(([key, value]) => {
            const mode = key as TimerMode;

            return (
              <Button
                key={mode}
                text={value.label}
                active={currentMode === mode}
                onClick={() => onChangeMode(mode)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TabSelector;
