import { Kitty } from "../Kitty";

const gifts = [
  { id: "memories" as const, label: "Captured Memories", icon: "📸", hue: "350 80% 92%" },
  { id: "letter" as const, label: "A Love Letter", icon: "💌", hue: "30 85% 92%" },
  { id: "song" as const, label: "Our Song", icon: "🎵", hue: "290 70% 92%" },
  { id: "future" as const, label: "Our Future Plans", icon: "🏡", hue: "180 60% 92%" },
];

export type GiftId = (typeof gifts)[number]["id"];

export const GiftsScreen = ({ onPick }: { onPick: (id: GiftId) => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      <div className="animate-float">
        <Kitty mood="love" size={120} />
      </div>
      <h2 className="font-script text-5xl md:text-6xl text-rose-deep mt-4 text-center">
        These are for you ♥
      </h2>
      <p className="font-serif italic text-lg md:text-xl text-muted-foreground mt-2 text-center">
        Tap each gift to open it
      </p>

      <div className="grid grid-cols-2 gap-5 md:gap-7 mt-10 max-w-2xl w-full">
        {gifts.map((g, i) => (
          <button
            key={g.id}
            onClick={() => onPick(g.id)}
            className="group bg-white shadow-paper hover:shadow-card rounded-3xl p-6 md:p-8 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 border border-rose-soft animate-pop-in"
            style={{ animationDelay: `${0.2 + i * 0.15}s`, background: `linear-gradient(160deg, white 0%, hsl(${g.hue}) 100%)` }}
          >
            <div className="text-5xl md:text-6xl group-hover:scale-125 group-hover:-rotate-12 transition-transform">{g.icon}</div>
            <span className="font-handwritten text-2xl md:text-3xl text-rose-deep">{g.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
