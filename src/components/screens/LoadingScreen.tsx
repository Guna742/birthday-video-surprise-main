import { useEffect, useState } from "react";
import { Kitty } from "../Kitty";

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(id); setTimeout(onDone, 500); return 100; }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="animate-float">
        <Kitty mood="cake" size={160} />
      </div>
      <h2 className="font-script text-4xl md:text-5xl text-rose-deep mt-8 text-center">
        Loading your birthday surprise<span className="animate-pulse-soft">...</span>
      </h2>
      <div className="w-72 md:w-96 h-3 bg-blush rounded-full mt-10 overflow-hidden shadow-paper">
        <div
          className="h-full bg-gradient-rose rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-handwritten text-2xl text-muted-foreground mt-4">{progress}%</p>
    </div>
  );
};
