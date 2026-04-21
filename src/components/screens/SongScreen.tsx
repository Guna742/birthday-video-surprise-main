import { useState, useRef, useEffect } from "react";
import { BackButton } from "../BackButton";
import { Play, Pause } from "lucide-react";

export const SongScreen = ({ onBack }: { onBack: () => void }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("/audio/song.mp3");
    
    // Handle end of song
    const handleEnded = () => {
      setPlaying(false);
    };

    audioRef.current.addEventListener("ended", handleEnded);

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
      });
    }
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen px-6 py-14 flex flex-col items-center animate-fade-in">
      <h2 className="font-script text-5xl md:text-6xl text-rose-deep text-center">A Song That Reminds Me Of Us</h2>

      <div className="bg-white shadow-card rounded-3xl max-w-xl w-full mt-10 p-8 border border-rose-soft animate-slide-up-fade">
        <div className="flex items-center gap-6">
          {/* Vinyl */}
          <div
            className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-foreground shrink-0 overflow-hidden ${playing ? "animate-spin-vinyl" : ""}`}
            style={{ background: "radial-gradient(circle at center, hsl(var(--rose)) 0 18%, #1a1a1a 18% 100%)" }}
          >
            <div className="absolute inset-0 rounded-full border border-white/5" />
            <div className="absolute inset-4 rounded-full border border-white/5" />
            <div className="absolute inset-8 rounded-full border border-white/5" />
            
            {/* Glare effect for rotating visibility */}
            <div className="absolute inset-0 bg-vinyl-glare" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cream rounded-full z-10" />
          </div>

          <div className="flex-1">
            <p className="font-handwritten text-3xl text-rose-deep leading-tight">our song ♥</p>
            <p className="font-serif italic text-muted-foreground text-sm md:text-base">the one that always plays in my head</p>
            <button
              onClick={togglePlay}
              className="mt-4 inline-flex items-center gap-2 bg-gradient-rose text-primary-foreground font-body font-bold px-6 py-3 rounded-full shadow-soft hover:scale-105 transition-transform"
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
              {playing ? "Pause" : "Play"}
            </button>
          </div>
        </div>

        <div className="mt-6 h-2 bg-blush rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-rose ${playing ? "w-full duration-[180s]" : "w-0"} transition-all linear`} />
        </div>
        <p className="font-handwritten text-center text-muted-foreground mt-4 text-lg">
          ♪ every lyric somehow sounds like you ♪
        </p>
      </div>

      <BackButton onClick={onBack} className="mt-10" />
    </div>
  );
};
