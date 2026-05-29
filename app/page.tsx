"use client";
import TabSelector from "@/components/tabSelector/TabSelector";
import { Settings } from "@/components/ui/settings/Settings";
import TimerDisplay from "@/components/ui/timer/TimerDisplay";
import { usePomodoro } from "@/context/PomodoroContext";

const TimerDisplayAny = TimerDisplay as any;

const Home = () => {
  const { currentMode, changeMode } = usePomodoro();

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-6 p-200 max-w-[1000px] mx-auto">
      <TabSelector currentMode={currentMode} onChangeMode={changeMode} />

      <TimerDisplayAny />

      <Settings />
    </main>
  );
};

export default Home;
