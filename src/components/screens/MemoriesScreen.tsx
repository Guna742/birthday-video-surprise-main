import { BackButton } from "../BackButton";
import { Heart } from "lucide-react";

export const MemoriesScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-8 relative overflow-hidden animate-fade-in font-handwritten">
      {/* "Your pics here" Annotation */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center animate-float">
        <svg width="120" height="120" viewBox="0 0 200 200" className="text-rose-deep opacity-80">
          <path 
            d="M50 150 Q70 100 120 80 M120 80 L100 85 M120 80 L115 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path 
            d="M30 140 C10 120 40 100 50 120 C60 100 90 120 70 140 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
        <p className="text-rose-deep text-2xl -mt-4 transform -rotate-12">Your pics here</p>
      </div>

      {/* Scattered Cards */}
      <div className="relative w-full h-full min-h-[80vh]">
        
        {/* Top Left Polaroid */}
        <div className="absolute top-[10%] left-[15%] w-48 h-64 bg-white border border-rose-soft shadow-paper p-3 transform -rotate-6 animate-float-gentle">
          <div className="w-full aspect-square bg-rose-soft/10 border border-rose-soft/20 flex items-center justify-center">
             <Heart className="text-rose-soft/30 w-10 h-10" />
          </div>
        </div>

        {/* Bottom Left Polaroid */}
        <div className="absolute bottom-[15%] left-[5%] w-56 h-72 bg-white border border-rose-soft shadow-paper p-4 transform rotate-12 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-full aspect-square bg-rose-soft/10 border border-rose-soft/20 flex items-center justify-center">
             <Heart className="text-rose-soft/30 w-12 h-12" />
          </div>
        </div>

        {/* Center Vertical Strip 1 */}
        <div className="absolute top-[5%] left-[45%] w-32 h-[500px] bg-white border border-rose-soft shadow-paper p-2 flex flex-col gap-2 transform rotate-3 animate-float-slow">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-full aspect-square bg-rose-soft/10 border border-rose-soft/20 flex items-center justify-center">
               <Heart className="text-rose-soft/20 w-8 h-8" />
            </div>
          ))}
        </div>

        {/* Center Vertical Strip 2 */}
        <div className="absolute top-[15%] left-[58%] w-32 h-[450px] bg-white border border-rose-soft shadow-paper p-2 flex flex-col gap-2 transform -rotate-2 animate-float" style={{ animationDelay: "0.5s" }}>
          {[1,2,3].map(i => (
            <div key={i} className="w-full aspect-square bg-rose-soft/10 border border-rose-soft/20 flex items-center justify-center">
               <Heart className="text-rose-soft/20 w-8 h-8" />
            </div>
          ))}
        </div>

        {/* Right Side Cards */}
        <div className="absolute top-[10%] right-[10%] w-44 h-56 bg-white border border-rose-soft shadow-paper p-3 transform rotate-6 animate-float-gentle" style={{ animationDelay: "1.5s" }}>
          <div className="w-full aspect-square bg-rose-soft/10 border border-rose-soft/20 flex items-center justify-center">
             <Heart className="text-rose-soft/30 w-10 h-10" />
          </div>
        </div>

        <div className="absolute bottom-[20%] right-[15%] w-52 h-68 bg-white border border-rose-soft shadow-paper p-4 transform -rotate-3 animate-float">
          <div className="w-full aspect-square bg-rose-soft/10 border border-rose-soft/20 flex items-center justify-center">
             <Heart className="text-rose-soft/30 w-12 h-12" />
          </div>
        </div>

      </div>

      {/* Bottom Right Title */}
      <div className="absolute bottom-10 right-10 z-10 text-right">
        <h2 className="font-script text-6xl md:text-8xl text-rose-deep opacity-90 drop-shadow-sm">
          Captured memories
        </h2>
      </div>

      <div className="fixed bottom-10 left-10 z-20">
        <BackButton onClick={onBack} />
      </div>
    </div>
  );
};
