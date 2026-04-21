import { useState, useEffect } from "react";
import { Lock } from "lucide-react";

interface PasscodeScreenProps {
  onSuccess: () => void;
}

export const PasscodeScreen = ({ onSuccess }: PasscodeScreenProps) => {
  const [passcode, setPasscode] = useState<string>("");
  const [error, setError] = useState(false);
  const correctCode = "2522";

  const handleKeyPress = (digit: string) => {
    if (passcode.length < 4) {
      setPasscode(prev => prev + digit);
    }
  };

  const handleClear = () => {
    setPasscode("");
    setError(false);
  };

  useEffect(() => {
    if (passcode.length === 4) {
      if (passcode === correctCode) {
        onSuccess();
      } else {
        setError(true);
        setTimeout(() => setPasscode(""), 500);
      }
    }
  }, [passcode, onSuccess]);

  return (
    <div className="min-h-screen bg-[#FADADD] flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in font-quicksand">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/30 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/40">
        
        {/* Left Side - Polaroid Section */}
        <div className="relative w-full md:w-1/2 flex justify-center scale-90 md:scale-100">
          <div className="bg-white p-4 pb-16 rotate-[-2deg] shadow-2xl relative transition-transform hover:rotate-0 duration-500">
            {/* The Photo */}
            <div className="w-[300px] h-[340px] overflow-hidden bg-muted relative">
              <img 
                src="https://images.unsplash.com/photo-1549416805-095df93a6df7?q=80&w=1000&auto=format&fit=crop" 
                alt="Couple with flowers" 
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Pink Bow Decoration */}
            <div className="absolute -top-8 -right-8 w-24 h-24 animate-pulse-soft z-10">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <path d="M50 50 C30 20 10 20 10 40 C10 60 30 60 50 50 C70 60 90 60 90 40 C90 20 70 20 50 50" fill="#FFB6C1" stroke="#E75480" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#FFB6C1" stroke="#E75480" strokeWidth="2" />
                <path d="M50 50 L30 80 M50 50 L70 80" stroke="#E75480" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Bunny Decoration */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 z-20 hover:scale-110 transition-transform cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                {/* Body */}
                <ellipse cx="50" cy="70" rx="25" ry="20" fill="white" stroke="#E75480" strokeWidth="2" />
                {/* Head */}
                <circle cx="50" cy="45" r="20" fill="white" stroke="#E75480" strokeWidth="2" />
                {/* Ears */}
                <ellipse cx="40" cy="20" rx="6" ry="15" fill="white" stroke="#E75480" strokeWidth="2" transform="rotate(-10 40 20)" />
                <ellipse cx="60" cy="20" rx="6" ry="15" fill="white" stroke="#E75480" strokeWidth="2" transform="rotate(10 60 20)" />
                {/* Eyes */}
                <circle cx="43" cy="42" r="2" fill="#333" />
                <circle cx="57" cy="42" r="2" fill="#333" />
                {/* Letter Pouch */}
                <rect x="35" y="60" width="30" height="20" rx="2" fill="#FFB6C1" />
                <path d="M35 60 L50 70 L65 60" fill="none" stroke="#E75480" strokeWidth="1" />
                <text x="46" y="75" fill="#E75480" fontSize="10" className="font-bold">♥</text>
              </svg>
            </div>
            
            {/* Date/Label */}
            <p className="font-handwritten text-2xl text-rose-deep absolute bottom-4 left-6 opacity-70">
              Our Moment ♥
            </p>
          </div>
        </div>

        {/* Right Side - Keypad Section */}
        <div className="w-full md:w-[400px] flex flex-col items-center">
          <h2 className="font-script text-4xl md:text-5xl text-[#E75480] mb-8 text-center drop-shadow-sm">
            Entre a passcode
          </h2>

          {/* Passcode Display */}
          <div className="flex gap-4 mb-10">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 flex items-center justify-center text-3xl font-bold transition-all duration-300
                  ${error ? "border-red-400 bg-red-50 text-red-500 animate-wiggle" : 
                    passcode.length > i ? "border-[#E75480] bg-[#FFB6C1] text-white scale-110" : "border-[#FFB6C1] bg-white/50 text-[#E75480]"}`}
              >
                {passcode[i] ? "*" : ""}
              </div>
            ))}
          </div>

          {/* Numeric Keypad */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
              <button
                key={key}
                onClick={key === "*" ? handleClear : () => typeof key === "number" && handleKeyPress(key.toString())}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-200
                  ${typeof key === "number" ? 
                    "bg-[#E75480] text-white hover:bg-[#C0446A] active:scale-90 shadow-lg" : 
                    "bg-[#FFB6C1] text-[#E75480] hover:bg-[#F8AABC] active:scale-95 shadow-md"}`}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-[#E75480]/60 font-medium italic">
            <Lock size={16} />
            <span>Hint: "2522"</span>
          </div>
        </div>
      </div>
    </div>
  );
};
