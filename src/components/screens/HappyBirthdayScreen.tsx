import { Kitty } from "../Kitty";

export const HappyBirthdayScreen = ({ name, onContinue }: { name: string; onContinue: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 animate-fade-in text-center">
      <div className="animate-scale-bounce-in">
        <Kitty mood="cake" size={180} />
      </div>
      <h1 className="font-script text-6xl md:text-8xl shimmer-text mt-6 leading-tight animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
        Happy Birthday,
      </h1>
      <h2 className="font-script text-6xl md:text-8xl text-rose-deep mt-2 animate-slide-up-fade" style={{ animationDelay: "0.7s" }}>
        {name}! ♥
      </h2>
      <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mt-6 max-w-xl animate-slide-up-fade" style={{ animationDelay: "1s" }}>
        Today the whole world is a little brighter — because you're in it.
      </p>
      <button
        onClick={onContinue}
        className="mt-12 bg-gradient-rose text-primary-foreground font-body font-bold px-10 py-4 rounded-full shadow-soft hover:scale-105 transition-transform animate-slide-up-fade"
        style={{ animationDelay: "1.4s" }}
      >
        Open your gifts ♥
      </button>
    </div>
  );
};
