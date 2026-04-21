import { BackButton } from "../BackButton";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MessageSquare
} from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Kitty } from "../Kitty";

const photos = [
  { 
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", 
    caption: "where it all began ♥",
    location: "First Hello"
  },
  { 
    url: "https://images.unsplash.com/photo-1516589174184-c685266d4af4?q=80&w=800&auto=format&fit=crop", 
    caption: "every moment is a treasure",
    location: "Paris Dreams"
  },
  { 
    url: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&w=800&auto=format&fit=crop", 
    caption: "you make everything festive",
    location: "Celebration Night"
  },
  { 
    url: "https://images.unsplash.com/photo-1501901664589-51b878c282f1?q=80&w=800&auto=format&fit=crop", 
    caption: "walking into our future together",
    location: "Forever Road"
  },
];

export const MemoriesScreen = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen px-4 py-14 flex flex-col items-center animate-fade-in relative overflow-hidden">
      {/* Decorative 3D Hearts */}
      <div className="absolute top-20 -left-10 md:left-20 animate-float opacity-80 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 200 200">
          <defs>
            <radialGradient id="heartGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ff85a1" />
              <stop offset="100%" stopColor="#e01e5a" />
            </radialGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.3" />
            </filter>
          </defs>
          <path 
            d="M100 180 C-50 120 -20 40 100 80 C220 40 250 120 100 180 Z" 
            fill="url(#heartGrad)" 
            filter="url(#shadow)"
          />
        </svg>
      </div>

      <div className="absolute bottom-40 -right-10 md:right-20 animate-float-slow opacity-90 pointer-events-none" style={{ animationDelay: "1s" }}>
        <svg width="80" height="80" viewBox="0 0 200 200">
          <path 
            d="M100 180 C-50 120 -20 40 100 80 C220 40 250 120 100 180 Z" 
            fill="url(#heartGrad)" 
            filter="url(#shadow)"
            transform="rotate(15, 100, 100) scale(0.8)"
          />
        </svg>
      </div>

      <h2 className="font-script text-5xl md:text-6xl text-rose-deep text-center mb-10 z-10">
        Captured Memories
      </h2>

      {/* Full-Card Carousel Container */}
      <div className="w-full max-w-[340px] md:max-w-[380px] px-2 relative z-10 mb-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-0">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="pl-0">
                {/* Instagram Post Card */}
                <div className="bg-white border border-rose-soft rounded-2xl shadow-card overflow-hidden transition-all duration-300">
                  {/* IG Header */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-rose-soft/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-rose-soft p-0.5 bg-gradient-rose">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <Kitty mood="love" size={28} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-xs text-foreground leading-tight">your_forever_love</span>
                        <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-body">{photo.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-rose-deep">
                      <Heart size={16} className="hover:scale-110 transition-transform cursor-pointer" />
                      <MessageSquare size={16} className="hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <p className="font-handwritten text-white text-xl drop-shadow-sm italic">
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  {/* IG Footer */}
                  <div className="p-3 flex flex-col gap-2 font-body">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Heart size={20} className="text-rose-deep fill-rose-deep hover:scale-110 transition-transform cursor-pointer" />
                        <MessageCircle size={20} className="text-rose-deep hover:scale-110 transition-transform cursor-pointer" />
                        <Send size={20} className="text-rose-deep hover:scale-110 transition-transform cursor-pointer" />
                      </div>
                      <Bookmark size={20} className="text-rose-deep hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                    
                    <div className="space-y-0.5">
                      <p className="text-[12px] font-bold text-foreground leading-tight">
                        Liked by <span className="hover:underline cursor-pointer">perfect_match</span> and 842 others
                      </p>
                      <p className="text-[12px] text-foreground/80 leading-snug">
                        <span className="font-bold mr-1">your_forever_love</span>
                        {index === 0 && "Our very first moment... ♥"}
                        {index === 1 && "The best trip we ever took together!"}
                        {index === 2 && "Everything is better when you're here."}
                        {index === 3 && "So many more memories to make. Happy Birthday! ♥"}
                      </p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-1.5 opacity-60">
                        {index === 3 ? "Just now" : `${index + 1} day ago`} • SWEET MEMORIES
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 opacity-80 hover:opacity-100 bg-white border-rose-soft text-rose-deep hidden md:flex" />
          <CarouselNext className="-right-12 opacity-80 hover:opacity-100 bg-white border-rose-soft text-rose-deep hidden md:flex" />
        </Carousel>
        
        {/* Pagination indicator hint for mobile */}
        <p className="md:hidden text-center text-[10px] text-muted-foreground mt-4 font-body animate-pulse-soft">
          Swipe left/right to see more
        </p>
      </div>

      <div className="flex justify-center z-10">
        <BackButton onClick={onBack} />
      </div>
    </div>
  );
};
