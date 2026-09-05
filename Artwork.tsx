"use client";

import { useEffect, useRef, useState } from "react";

export default function Artwork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scale = 1 + Math.min(scrollY * 0.0003, 0.15);
  const scrollTranslateY = Math.min(scrollY * 0.25, 150);
  const opacity = Math.max(1 - scrollY / 700, 0.2);

  const imgOffsetX = mouse.x * -3;
  const imgOffsetY = mouse.y * -3;
  const textOffsetX = mouse.x * 5;
  const textOffsetY = mouse.y * 5;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/artwork.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `scale(${scale}) translate(${imgOffsetX}px, ${
            scrollTranslateY + imgOffsetY
          }px)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div
        className="relative z-10 text-center px-6"
        style={{
          opacity,
          transform: `translate(${textOffsetX}px, ${textOffsetY}px)`,
          transition: "transform 0.15s ease-out, opacity 0.05s linear",
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Welcome To The Garden
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white">
          Music Producer • Sound Designer • Composer
        </p>
        <p
          className="mt-24 text-white text-xl md:text-2xl"
          style={{ animation: "gentle-bounce 2.2s ease-in-out infinite" }}
        >
          Where every path tells a story.
        </p>
      </div>
    </section>
  );
}
