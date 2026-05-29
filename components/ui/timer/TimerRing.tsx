type TimerRingProps = {
  progress: number;
};

const TimerRing = ({ progress }: TimerRingProps) => {
  const radius = 97;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="absolute inset-0 -rotate-90" viewBox="0 0 240 240">
      <circle
        cx="120"
        cy="120"
        r={radius}
        strokeWidth="8"
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className="stroke-theme-accent transition-all duration-500"
      />
    </svg>
  );
};

export default TimerRing;
