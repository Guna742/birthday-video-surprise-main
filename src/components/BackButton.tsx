import { ChevronLeft, Heart } from "lucide-react";

export const BackButton = ({ onClick, className = "" }: { onClick: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 bg-white border border-rose-soft text-rose-deep font-handwritten text-2xl px-6 py-2 rounded-full shadow-paper hover:scale-105 hover:bg-blush transition-all ${className}`}
  >
    <ChevronLeft size={20} />
    <span>go back</span>
    <Heart size={14} className="fill-rose text-rose animate-pulse-soft" />
  </button>
);
