import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CyberBackground({ variant = "default" }: { variant?: "default" | "hero" | "radar" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {variant === "hero" && <Particles count={40} />}
      {variant === "radar" && <RadarSweep />}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-40 blur-[120px]" style={{ background: "var(--color-primary)" }} />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-30 blur-[120px]" style={{ background: "var(--color-secondary)" }} />
    </div>
  );
}

function Particles({ count }: { count: number }) {
  const [items, setItems] = useState<{ x: number; y: number; d: number; s: number }[]>([]);
  useEffect(() => {
    setItems(Array.from({ length: count }, () => ({
      x: Math.random() * 100, y: Math.random() * 100, d: 4 + Math.random() * 8, s: 1 + Math.random() * 3,
    })));
  }, [count]);
  return (
    <div className="absolute inset-0">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, boxShadow: "0 0 12px var(--color-accent)" }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function RadarSweep() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
      <div className="relative h-[600px] w-[600px] rounded-full border border-primary/30">
        <div className="absolute inset-8 rounded-full border border-primary/20" />
        <div className="absolute inset-16 rounded-full border border-primary/15" />
        <div className="absolute inset-24 rounded-full border border-primary/10" />
        <div
          className="absolute inset-0 animate-radar"
          style={{ background: "conic-gradient(from 0deg, transparent 0deg, var(--color-primary) 60deg, transparent 70deg)", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}

export function AnimatedWorldMap() {
  // Stylised dot-matrix world map
  const points: { x: number; y: number }[] = [];
  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 60; x++) {
      // Simple landmass approximation
      const lat = 90 - (y / 30) * 180;
      const lon = -180 + (x / 60) * 360;
      const isLand =
        // Americas
        (lon > -130 && lon < -65 && lat > 8 && lat < 65) ||
        (lon > -80 && lon < -35 && lat > -55 && lat < 10) ||
        // Europe + Africa
        (lon > -10 && lon < 40 && lat > 35 && lat < 65) ||
        (lon > -18 && lon < 50 && lat > -35 && lat < 35) ||
        // Asia
        (lon > 40 && lon < 145 && lat > 5 && lat < 70) ||
        // Australia
        (lon > 110 && lon < 155 && lat > -40 && lat < -10);
      if (isLand && Math.random() > 0.35) points.push({ x, y });
    }
  }
  const nodes = [
    { x: 18, y: 10, label: "NA" },
    { x: 32, y: 11, label: "EU" },
    { x: 45, y: 16, label: "AS" },
    { x: 50, y: 22, label: "AU" },
    { x: 22, y: 19, label: "SA" },
  ];
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full">
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={0.18} fill="var(--color-accent)" opacity={0.5} />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={0.6} fill="var(--color-primary)">
            <animate attributeName="r" values="0.6;1.2;0.6" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={n.x} cy={n.y} r={0.3} fill="white" />
        </g>
      ))}
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="var(--color-accent)" strokeWidth={0.08} opacity={0.4} strokeDasharray="0.5 0.5"
          >
            <animate attributeName="stroke-dashoffset" values="0;1" dur="3s" repeatCount="indefinite" />
          </line>
        ))
      )}
    </svg>
  );
}
