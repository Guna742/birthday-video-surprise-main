import { BackButton } from "../BackButton";
import { Heart } from "lucide-react";

export const LetterScreen = ({ name, onBack }: { name: string; onBack: () => void }) => {
  return (
    <div className="min-h-screen px-6 py-14 flex flex-col items-center animate-fade-in">
      <h2 className="font-script text-5xl md:text-6xl text-rose-deep text-center">A Special Message</h2>

      <div className="bg-white shadow-card rounded-2xl max-w-2xl w-full mt-10 p-8 md:p-12 paper-texture border border-rose-soft relative animate-slide-up-fade">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-rose-soft shadow-soft">
          <Heart className="text-rose fill-rose animate-pulse-soft" size={32} />
        </div>

        <p className="font-handwritten text-3xl text-rose-deep mb-4">Dear {name},</p>
        <div className="font-serif italic text-foreground/80 text-lg leading-relaxed space-y-4">
          <p>
            Today is your day — and I want you to feel as celebrated as you make me feel every single day.
            You have this quiet way of making everything around you softer, warmer, kinder.
          </p>
          <p>
            Thank you for your laugh, your patience, your ridiculous jokes,
            and the way you look at the world like it's worth showing up for. It is — because of you.
          </p>
          <p>
            On your birthday, I wish you sunlight that follows you, dreams that come true on time,
            and a year so full of joy you'll need extra pockets to carry it all.
          </p>
          <p className="font-script text-2xl text-rose not-italic mt-6">
            Forever yours,<br />
            Me ♥
          </p>
        </div>
      </div>

      <BackButton onClick={onBack} className="mt-10" />
    </div>
  );
};
