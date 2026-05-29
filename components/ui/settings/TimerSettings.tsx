"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/context/SettingsContext";

const TimerSettings = () => {
  const {
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    setPomodoroTime,
    setShortBreakTime,
    setLongBreakTime,
  } = useSettings();

  return (
    <div className="border-b border-gray-100 pb-6">
      <h3 className="text-xs font-bold tracking-[5px] text-blue-950 uppercase mb-4 text-center sm:text-left">
        Time (Minutes)
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-stretch gap-2">
          <Label
            htmlFor="pomodoro"
            className="text-xs font-bold text-blue-900/40 lowcase"
          >
            pomodoro
          </Label>
          <Input
            id="pomodoro"
            type="number"
            value={pomodoroTime}
            onChange={(e) => setPomodoroTime(parseInt(e.target.value) || 25)}
            min={1}
            max={60}
            className="w-[140px] sm:w-full bg-blue-50 border-none rounded-xl h-12 text-blue-950 font-bold p-4 focus-visible:ring-1 focus-visible:ring-blue-100"
          />
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-stretch gap-2">
          <Label
            htmlFor="shortBreak"
            className="text-xs font-bold text-blue-900/40 lowcase"
          >
            short break
          </Label>
          <Input
            id="shortBreak"
            type="number"
            value={shortBreakTime}
            onChange={(e) => setShortBreakTime(parseInt(e.target.value) || 5)}
            min={1}
            max={60}
            className="w-[140px] sm:w-full bg-blue-50 border-none rounded-xl h-12 text-blue-950 font-bold p-4 focus-visible:ring-1 focus-visible:ring-blue-100"
          />
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-stretch gap-2">
          <Label
            htmlFor="longBreak"
            className="text-xs font-bold text-blue-900/40 lowcase"
          >
            long break
          </Label>
          <Input
            id="longBreak"
            type="number"
            value={longBreakTime}
            onChange={(e) => setLongBreakTime(parseInt(e.target.value) || 15)}
            min={1}
            max={60}
            className="w-[140px] sm:w-full bg-blue-50 border-none rounded-xl h-12 text-blue-950 font-bold p-4 focus-visible:ring-1 focus-visible:ring-blue-100"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
