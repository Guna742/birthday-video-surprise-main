// Cute hand-drawn kitty (inspired by molang/cat doodles)
export const Kitty = ({ mood = "happy", size = 120 }: { mood?: "happy" | "shy" | "love" | "cake" | "wave"; size?: number }) => {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className="select-none">
      {/* body */}
      <ellipse cx="100" cy="135" rx="62" ry="50" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="3" />
      {/* head */}
      <circle cx="100" cy="85" r="55" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="3" />
      {/* ears */}
      <path d="M55 55 L48 30 L75 50 Z" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="3" strokeLinejoin="round" />
      <path d="M145 55 L152 30 L125 50 Z" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="3" strokeLinejoin="round" />
      <path d="M58 48 L54 36 L68 47 Z" fill="hsl(var(--rose-soft))" />
      <path d="M142 48 L146 36 L132 47 Z" fill="hsl(var(--rose-soft))" />

      {/* cheeks */}
      <ellipse cx="68" cy="95" rx="9" ry="5" fill="hsl(345 80% 80%)" opacity="0.7" />
      <ellipse cx="132" cy="95" rx="9" ry="5" fill="hsl(345 80% 80%)" opacity="0.7" />

      {/* eyes */}
      {mood === "happy" && (
        <>
          <path d="M78 80 Q83 73 88 80" stroke="hsl(var(--foreground))" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M112 80 Q117 73 122 80" stroke="hsl(var(--foreground))" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      )}
      {mood === "shy" && (
        <>
          <path d="M76 82 Q83 76 90 82" stroke="hsl(var(--foreground))" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M110 82 Q117 76 124 82" stroke="hsl(var(--foreground))" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <line x1="70" y1="100" x2="80" y2="100" stroke="hsl(345 60% 70%)" strokeWidth="2" />
          <line x1="120" y1="100" x2="130" y2="100" stroke="hsl(345 60% 70%)" strokeWidth="2" />
        </>
      )}
      {mood === "love" && (
        <>
          <text x="76" y="88" fontSize="18" fill="hsl(var(--rose))">♥</text>
          <text x="110" y="88" fontSize="18" fill="hsl(var(--rose))">♥</text>
        </>
      )}
      {mood === "wave" && (
        <>
          <circle cx="83" cy="80" r="3" fill="hsl(var(--foreground))" />
          <circle cx="117" cy="80" r="3" fill="hsl(var(--foreground))" />
        </>
      )}
      {mood === "cake" && (
        <>
          <circle cx="83" cy="80" r="3" fill="hsl(var(--foreground))" />
          <circle cx="117" cy="80" r="3" fill="hsl(var(--foreground))" />
          {/* party hat */}
          <path d="M85 28 L100 -8 L120 24 Z" fill="hsl(var(--rose))" stroke="hsl(var(--rose-deep))" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="100" cy="-8" r="4" fill="hsl(var(--gold))" />
        </>
      )}

      {/* mouth */}
      {mood === "cake" || mood === "happy" ? (
        <path d="M92 105 Q100 113 108 105" stroke="hsl(var(--foreground))" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ) : (
        <ellipse cx="100" cy="106" rx="3" ry="2" fill="hsl(var(--foreground))" />
      )}

      {/* paws */}
      <ellipse cx="70" cy="170" rx="14" ry="9" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="2.5" />
      <ellipse cx="130" cy="170" rx="14" ry="9" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="2.5" />

      {mood === "wave" && (
        <g style={{ transformOrigin: "150px 130px", animation: "wiggle 0.8s ease-in-out infinite" }}>
          <ellipse cx="155" cy="115" rx="10" ry="14" fill="white" stroke="hsl(var(--rose-deep))" strokeWidth="2.5" />
        </g>
      )}

      {mood === "cake" && (
        <g>
          {/* cake plate */}
          <ellipse cx="100" cy="155" rx="32" ry="6" fill="hsl(var(--rose-soft))" stroke="hsl(var(--rose-deep))" strokeWidth="2" />
          <rect x="75" y="138" width="50" height="18" rx="3" fill="hsl(var(--cream))" stroke="hsl(var(--rose-deep))" strokeWidth="2" />
          <path d="M75 145 Q85 150 95 145 Q105 140 115 145 Q120 147 125 145 L125 138 L75 138 Z" fill="hsl(var(--rose))" />
          <line x1="100" y1="120" x2="100" y2="138" stroke="hsl(var(--gold))" strokeWidth="2" />
          <path d="M100 115 Q97 120 100 122 Q103 120 100 115" fill="hsl(var(--gold))" />
        </g>
      )}
    </svg>
  );
};
