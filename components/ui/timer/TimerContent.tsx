import TimerControls from "./TimerControls";

type TimerContentProps = {
  time: string;

  isRunning: boolean;

  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

const TimerContent = ({
  time,

  isRunning,

  onStart,
  onPause,
  onReset,
}: TimerContentProps) => {
  return (
    <div className="z-10 flex flex-col items-center">
      <h1 className="text-7xl font-light text-white">{time}</h1>

      <TimerControls
        isRunning={isRunning}
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
      />
    </div>
  );
};

export default TimerContent;
