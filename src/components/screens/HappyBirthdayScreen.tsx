import { Kitty } from "../Kitty";

export const HappyBirthdayScreen = ({ name, onContinue }: { name: string; onContinue: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 animate-fade-in text-center">
      <div className="animate-float">
        <Kitty mood="cake" size={150} />
      </div>
      <h1 className="font-script text-5xl md:text-7xl lg:text-8xl shimmer-text mt-6 px-4 leading-tight animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
        Happy Birthday,
      </h1>
      <h2 className="font-script text-5xl md:text-7xl lg:text-8xl text-rose-deep mt-2 px-4 animate-slide-up-fade" style={{ animationDelay: "0.7s" }}>
        {name}! ♥
      </h2>
      <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mt-6 max-w-xl animate-slide-up-fade" style={{ animationDelay: "1s" }}>
        Today the whole world is a little brighter — because you're in it.
      </p>
      <button
        onClick={onContinue}
        className="mt-12 bg-gradient-rose text-primary-foreground font-body font-bold px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl shadow-soft hover:scale-105 transition-transform animate-slide-up-fade"
        style={{ animationDelay: "1.4s" }}
      >
        Open your gifts ♥
      </button>
    </div>
  );
};
