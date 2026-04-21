import { BackButton } from "../BackButton";

const polaroids = [
  { caption: "first hello", emoji: "👋", rot: -4 },
  { caption: "rainy walks", emoji: "☂️", rot: 3 },
  { caption: "midnight calls", emoji: "🌙", rot: -2 },
  { caption: "your laugh", emoji: "😂", rot: 5 },
  { caption: "shared sunsets", emoji: "🌅", rot: -3 },
  { caption: "us, always", emoji: "💞", rot: 4 },
];

export const MemoriesScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen px-6 py-14 animate-fade-in">
      <h2 className="font-script text-5xl md:text-6xl text-rose-deep text-center">Captured Memories</h2>
      <p className="font-serif italic text-center text-muted-foreground mt-2">us, in frames ♥</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        {polaroids.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-card rounded-md p-3 pb-6 hover:scale-105 transition-transform animate-pop-in"
            style={{ animationDelay: `${i * 0.1}s`, transform: `rotate(${p.rot}deg)` }}
          >
            <div
              className="aspect-[4/5] rounded-sm flex items-center justify-center text-7xl"
              style={{ background: `linear-gradient(135deg, hsl(${340 + i * 8} 80% 88%), hsl(${30 + i * 10} 80% 90%))` }}
            >
              {p.emoji}
            </div>
            <p className="font-handwritten text-2xl text-rose-deep text-center mt-3">{p.caption}</p>
          </div>
        ))}
      </div>

      <p className="font-handwritten text-xl text-center text-muted-foreground mt-10 max-w-md mx-auto">
        every frame is a little universe where we live forever.
      </p>

      <div className="flex justify-center mt-8">
        <BackButton onClick={onBack} />
      </div>
    </div>
  );
};
