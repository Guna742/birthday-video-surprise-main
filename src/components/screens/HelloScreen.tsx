import { useState } from "react";
import { Kitty } from "../Kitty";

export const HelloScreen = ({ name, onYes }: { name: string; onYes: () => void }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [stage, setStage] = useState<"ask" | "yes">("ask");

  const dodge = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 320,
      y: (Math.random() - 0.5) * 240,
    });
  };

  if (stage === "yes") {
    setTimeout(onYes, 1600);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
        <div className="animate-scale-bounce-in">
          <Kitty mood="love" size={180} />
        </div>
        <h2 className="font-script text-5xl md:text-6xl text-rose-deep mt-6 animate-pop-in" style={{ animationDelay: "0.3s" }}>
          I knew you'd say yes! ♥
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 animate-fade-in relative">
      <div className="bg-white shadow-card rounded-3xl px-8 md:px-14 py-12 max-w-2xl w-full relative paper-texture border border-rose-soft">
        <div className="flex justify-center mb-6 animate-float">
          <Kitty mood="wave" size={130} />
        </div>
        <h1 className="font-handwritten text-5xl md:text-6xl text-foreground text-center">
          Hello, <span className="font-script text-rose">{name}!</span>
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-muted-foreground text-center mt-4">
          Do you want to see your birthday gift?
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 relative" style={{ minHeight: "70px" }}>
          <button
            onClick={() => setStage("yes")}
            className="bg-gradient-rose text-primary-foreground font-body font-bold tracking-wide px-10 py-4 rounded-full shadow-soft hover:scale-105 transition-transform"
          >
            YES PLEASE ♥
          </button>
          <button
            onMouseEnter={dodge}
            onClick={dodge}
            className="bg-white border-2 border-rose-soft text-rose-deep font-body font-semibold tracking-wide px-8 py-4 rounded-full transition-transform duration-200"
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          >
            no thanks
          </button>
        </div>
      </div>
    </div>
  );
};
