type TimerControlsProps = {
  isRunning: boolean;

  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

const TimerControls = ({ isRunning, onStart, onPause }: TimerControlsProps) => {
  return (
    <div className="flex items-center gap-4 mt-8">
      {isRunning ? (
        <button
          onClick={onPause}
          className="
            uppercase
            text-md
            sm:text-2xl
            tracking-[0.4em]

            text-white/70

            hover:text-theme-accent
            hover:scale-105

            active:scale-95

            transition-all
            duration-300
            ease-out

            cursor-pointer
          "
        >
          Pause
        </button>
      ) : (
        <button
          onClick={onStart}
          className="
            uppercase
            text-md
            sm:text-2xl
            tracking-[0.4em]

            text-white

            hover:text-theme-accent
            hover:scale-105

            active:scale-95

            transition-all
            duration-300
            ease-out

            cursor-pointer
          "
        >
          Start
        </button>
      )}
    </div>
  );
};

export default TimerControls;
