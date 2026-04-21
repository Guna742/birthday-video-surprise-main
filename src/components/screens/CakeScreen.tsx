import { useState, useRef } from "react";
import { ConfettiBurst } from "../FloatingHearts";

export const CakeScreen = ({ onCut }: { onCut: () => void }) => {
  const [cut, setCut] = useState(false);
  const startX = useRef<number | null>(null);

  const trigger = () => {
    if (cut) return;
    setCut(true);
    setTimeout(onCut, 3500); 
  };

  const onPointerDown = (e: React.PointerEvent) => { startX.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current !== null && Math.abs(e.clientX - startX.current) > 60) trigger();
    startX.current = null;
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onClick={trigger}
    >
      <ConfettiBurst active={cut} />
      
      <h2 className="font-script text-3xl md:text-5xl text-rose-deep text-center mb-8 animate-pop-in">
        {cut ? "Happy Birthday, My Girl! 💖" : "Swipe anywhere to cut the cake!"}
      </h2>

      <div className={`relative transition-transform duration-700 ${cut ? "scale-110" : "animate-float"}`}>
        <img 
          src="/cake_doll.gif" 
          alt="Cute doll with cake" 
          className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto" 
        />
      </div>

      {!cut && (
        <p className="font-handwritten text-2xl text-muted-foreground mt-8 animate-pulse-soft">
          ↤ swipe ↦  or tap
        </p>
      )}
    </div>
  );
};
