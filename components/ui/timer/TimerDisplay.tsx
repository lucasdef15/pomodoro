"use client";

import TimerRing from "./TimerRing";
import TimerContent from "./TimerContent";

import { usePomodoro } from "@/context/PomodoroContext";

import formatTime from "@/utils/formatTime";

const TimerDisplay = () => {
  const {
    progress,
    timeLeft,
    isRunning,

    startTimer,
    pauseTimer,
    resetTimer,
  } = usePomodoro();

  return (
    <section className="flex items-center justify-center">
      <div
        id="timer_container"
        className="
        relative
        w-[clamp(300px,80vw,410px)]
        aspect-square
        rounded-full

        flex
        items-center
        justify-center

        bg-linear-to-l
        from-[#2e325a]
        to-[#0e112a]
        "
      >
        <div
          className="
            rounded-full
            w-[90%]
            h-[90%]
            aspect-square

            bg-blue-950

            flex
            items-center
            justify-center
          "
        >
          <TimerRing progress={progress} />

          <TimerContent
            time={formatTime(timeLeft)}
            isRunning={isRunning}
            onStart={startTimer}
            onPause={pauseTimer}
            onReset={resetTimer}
          />
        </div>
      </div>
    </section>
  );
};

export default TimerDisplay;
