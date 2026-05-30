import { useRef, useState } from "react";

export const StackCard = ({ children, reverse = false, glow }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(2,6,23,0.35)] from-white/85 to-white/30 dark:border-dark-800/80 dark:from-dark-950 dark:to-black/90 ${
        reverse ? "bg-gradient-to-bl" : "bg-gradient-to-br"
      }`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${
            position.y
          }px, ${glow || "rgba(0, 168, 232, 0.16)"}, transparent 40%)`,
        }}
      />
      {children}
    </article>
  );
};
