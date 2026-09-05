"use client";

import { useEffect, useState } from "react";

function Particles({ count }: { count: number }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + i * 0.7;
    const radius = 160 + ((i * 37) % 120);
    const px = Math.cos(angle) * radius;
    const py = Math.sin(angle) * radius;
    const size = 2 + (i % 3);
    const delay = (i % 10) * 0.4;
    const duration = 4 + (i % 5);
    return { px, py, size, delay, duration, key: i };
  });

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.key}
          className="absolute rounded-full bg-white"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: "50%",
            left: "50%",
            marginTop: `${-p.size / 2}px`,
            marginLeft: `${-p.size / 2}px`,
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.8)",
            "--px": `${p.px}px`,
            "--py": `${p.py}px`,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

export default function Intro() {
  const [show, setShow] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(1);
  const [contentDuration, setContentDuration] = useState(0);
  const [flashScale, setFlashScale] = useState(0.3);
  const [flashOpacity, setFlashOpacity] = useState(0);
  const [flashDuration, setFlashDuration] = useState(0);

  useEffect(() => {
    const flashInTimer = setTimeout(() => {
      setContentDuration(1.4);
      setContentOpacity(0);
      setFlashDuration(1.6);
      setFlashScale(30);
      setFlashOpacity(1);
    }, 3000);

    const flashOutTimer = setTimeout(() => {
      setFlashDuration(2);
      setFlashOpacity(0);
    }, 5000);

    const hideTimer = setTimeout(() => setShow(false), 7100);

    return () => {
      clearTimeout(flashInTimer);
      clearTimeout(flashOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: contentOpacity,
          transition: `opacity ${contentDuration}s ease-in-out`,
        }}
      >
        <Particles count={26} />

        <div
          className="absolute rounded-full"
          style={{
            width: "250px",
            height: "250px",
            background:
              "conic-gradient(from 0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.5), rgba(255,255,255,0.05), rgba(255,255,255,0.5), rgba(255,255,255,0.05))",
            filter: "blur(6px)",
            animation: "circle-pulse 1.2s ease-out forwards, portal-swirl 6s linear infinite",
          }}
        />

        <div
          className="absolute rounded-full bg-black"
          style={{
            width: "200px",
            height: "200px",
            animation: "circle-pulse 1.2s ease-out forwards",
          }}
        />

        <div
          className="absolute rounded-full border border-white/30"
          style={{
            width: "275px",
            height: "275px",
            animation: "circle-pulse 1.2s ease-out forwards, portal-pulse-glow 3s ease-in-out infinite",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "375px",
            height: "375px",
            border: "1px dotted rgba(255,255,255,0.35)",
            animation: "circle-pulse 1.4s ease-out forwards, portal-swirl 14s linear infinite reverse",
          }}
        />

        <div className="relative z-10 text-center px-6">
          <p className="text-sm tracking-[0.4em] uppercase text-gray-400">
            The Portal Beyond This World
          </p>
          <h1 className="mt-8 text-4xl md:text-6xl font-bold">
            Welcome, Wanderer
          </h1>
        </div>
      </div>

      <div
        className="absolute rounded-full bg-white pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          width: "300px",
          height: "300px",
          filter: "blur(2px)",
          opacity: flashOpacity,
          transform: `translate(-50%, -50%) scale(${flashScale})`,
          transition: `transform ${flashDuration}s ease-in-out, opacity ${flashDuration}s ease-in-out`,
        }}
      />
    </div>
  );
}
