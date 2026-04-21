import { BackButton } from "../BackButton";
import { HeartHandshake, Home, Plane, Infinity } from "lucide-react";

const plans = [
  { title: "The First Hug", body: "No more screens. Just you and me.", icon: HeartHandshake },
  { title: "Our Little Home", body: "Simple mornings. Late-night talks.", icon: Home },
  { title: "Side by Side", body: "New places. Same love.", icon: Plane },
  { title: "Forever, Slowly", body: "Growing old without growing apart.", icon: Infinity },
];

export const FutureScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen px-6 py-14 flex flex-col items-center animate-fade-in">
      <h2 className="font-script text-5xl md:text-6xl text-rose-deep text-center">Our Future Plans</h2>
      <p className="font-serif italic text-center text-muted-foreground mt-2">tap to see what's waiting…</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl w-full mt-10">
        {plans.map((p, i) => (
          <div
            key={p.title}
            className="bg-white border border-rose-soft shadow-paper rounded-2xl p-6 hover:shadow-card hover:-translate-y-1 transition-all animate-pop-in group"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="text-rose mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <p.icon size={40} strokeWidth={1.5} />
            </div>
            <p className="font-script text-3xl text-rose-deep">{p.title}</p>
            <p className="font-serif italic text-foreground/70 mt-2">{p.body}</p>
          </div>
        ))}
      </div>

      <BackButton onClick={onBack} className="mt-10" />
    </div>
  );
};
