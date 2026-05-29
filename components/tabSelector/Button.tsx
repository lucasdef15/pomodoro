"use client";

type ButtonProps = {
  text: string;
  active?: boolean;
  onClick?: () => void;
};

const Button = ({ text, active, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        p-300
        text-xs
        tracking-wide
        whitespace-nowrap

        sm:text-sm
        sm:p-400

        transition-all
        duration-300
        ease-out

        hover:scale-105
        hover:text-white
        active:scale-95

        focus:outline-none
        focus:ring-2
        focus:ring-theme-accent
        focus:ring-offset-2
        focus:ring-offset-blue-950

        cursor-pointer
        
        ${
          active
            ? `
              bg-theme-accent
              text-blue-950
              shadow-lg
              font-bold
            `
            : `
              bg-transparent
              text-blue-100/60
              hover:bg-theme-accent
              hover:text-blue-950
              hover:opacity-100
            `
        }
      `}
    >
      {text}
    </button>
  );
};

export default Button;
