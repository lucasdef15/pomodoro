"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

import { useSettings } from "./SettingsContext";
import type { TimerMode } from "@/types/timer";

type PomodoroContextValue = {
  currentMode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  progress: number;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  changeMode: (mode: TimerMode) => void;
};

const PomodoroContext = createContext<PomodoroContextValue | null>(null);

type PomodoroProviderProps = {
  children: ReactNode;
};

export function PomodoroProvider({ children }: PomodoroProviderProps) {
  const { pomodoroTime, shortBreakTime, longBreakTime } = useSettings();

  const durations: Record<TimerMode, number> = useMemo(
    () => ({
      pomodoro: pomodoroTime * 60,
      shortBreak: shortBreakTime * 60,
      longBreak: longBreakTime * 60,
    }),
    [pomodoroTime, shortBreakTime, longBreakTime],
  );

  const [currentMode, setCurrentMode] = useState<TimerMode>("pomodoro");
  const [timeLeft, setTimeLeft] = useState(durations.pomodoro);
  const [isRunning, setIsRunning] = useState(false);

  const totalTime = durations[currentMode];

  const progress = useMemo(() => {
    return totalTime > 0 ? (timeLeft / totalTime) * 100 : 100;
  }, [timeLeft, totalTime]);

  const startTimer = () => {
    if (timeLeft <= 0) {
      setTimeLeft(totalTime);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(durations[currentMode]);
    setIsRunning(false);
  };

  const changeMode = (mode: TimerMode) => {
    setCurrentMode(mode);
    setTimeLeft(durations[mode]);
    setIsRunning(false);
  };

  useEffect(() => {
    const currentDuration = durations[currentMode];

    setTimeLeft((prev) => {
      if (prev > currentDuration || prev < currentDuration) {
        return currentDuration;
      }
      return prev;
    });
  }, [currentMode, durations]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);

          setCurrentMode("pomodoro");
          return durations.pomodoro;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, totalTime, durations.pomodoro]);

  return (
    <PomodoroContext.Provider
      value={{
        currentMode,
        timeLeft,
        isRunning,
        progress,
        startTimer,
        pauseTimer,
        resetTimer,
        changeMode,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);

  if (!context) {
    throw new Error("usePomodoro must be used inside PomodoroProvider");
  }

  return context;
};
