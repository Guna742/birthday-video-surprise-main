import { useState, useRef } from "react";
import { Kitty } from "../Kitty";
import { Sparkles } from "lucide-react";

export const CakeScreen = ({ onCut }: { onCut: () => void }) => {
  const [cut, setCut] = useState(false);
  const startX = useRef<number | null>(null);

  const trigger = () => {
    if (cut) return;
    setCut(true);
    setTimeout(onCut, 1800);
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
      <h2 className="font-script text-3xl md:text-5xl text-rose-deep text-center mb-8 animate-pop-in">
        Swipe anywhere to cut the cake!
      </h2>
      <div className={`relative transition-transform duration-700 ${cut ? "scale-110" : "animate-float"}`}>
        <Kitty mood="cake" size={220} />
        {cut && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="text-rose animate-heart-pop size-16" />
          </div>
        )}
      </div>
      <p className="font-handwritten text-2xl text-muted-foreground mt-8 animate-pulse-soft">
        ↤ swipe ↦  or tap
      </p>
    </div>
  );
};
