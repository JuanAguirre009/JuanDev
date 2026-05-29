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
      className={`relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-2xl from-white/80 to-white/40 dark:border-dark-800 dark:from-dark-950 dark:to-black ${
        reverse ? "bg-gradient-to-l" : "bg-gradient-to-r"
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
