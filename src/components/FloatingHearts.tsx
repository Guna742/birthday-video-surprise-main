import { useEffect, useState } from "react";

export const FloatingHearts = ({ density = 12 }: { density?: number }) => {
  const [hearts] = useState(() =>
    Array.from({ length: density }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 5,
      size: 14 + Math.random() * 22,
      hue: 340 + Math.random() * 20,
    }))
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0 animate-rise-fade"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            animationIterationCount: "infinite",
            color: `hsl(${h.hue} 80% 70%)`,
            fontSize: `${h.size}px`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export const Confetti = ({ active }: { active: boolean }) => {
  if (!active) return null;
  const pieces = Array.from({ length: 60 });
  const colors = ["hsl(345 80% 65%)", "hsl(40 90% 65%)", "hsl(290 70% 75%)", "hsl(180 60% 65%)", "hsl(15 85% 65%)"];
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 1.5;
        const duration = 2.5 + Math.random() * 2;
        const color = colors[i % colors.length];
        const size = 6 + Math.random() * 8;
        return (
          <div
            key={i}
            className="absolute animate-confetti-fall"
            style={{
              left: `${left}%`,
              top: 0,
              width: size,
              height: size * 1.6,
              backgroundColor: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              borderRadius: i % 3 === 0 ? "50%" : "2px",
            }}
          />
        );
      })}
    </div>
  );
};
