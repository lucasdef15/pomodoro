"use client";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import FontSettings from "./FontSettings";
import ColorSettings from "./ColorSettings";
import TimerSettings from "./TimerSettings";
import { usePomodoro } from "@/context/PomodoroContext";

const SettingsContent = () => {
  const { resetTimer } = usePomodoro();

  return (
    <DialogContent className="sm:max-w-[540px] bg-white text-blue-950 rounded-[25px] p-8 border-none overflow-visible">
      <DialogHeader className="border-b border-gray-100 pb-6">
        <DialogTitle className="text-2xl font-bold text-blue-950">
          Settings
        </DialogTitle>
        <DialogDescription className="sr-only">
          Configure your pomodoro timer preferences
        </DialogDescription>
      </DialogHeader>

      <div className="py-6 flex flex-col gap-6">
        <TimerSettings />
        <FontSettings />
        <ColorSettings />
      </div>

      <DialogFooter className="flex justify-center items-center justify-items-center">
        <DialogClose asChild>
          <Button
            type="button"
            onClick={resetTimer}
            className="bg-red-400 hover:bg-red-400/90 text-white font-bold px-12 py-6 rounded-full absolute -bottom-6 left-1/2 -translate-x-1/2 transition-colors cursor-pointer"
          >
            Apply
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default SettingsContent;
