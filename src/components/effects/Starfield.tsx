"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STAR_COUNT = 180;

    function initStars() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      starsRef.current = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05 + 0.01,
        });
      }
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        ctx.fillStyle = `rgba(187, 195, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow upward drift
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;

        // Sine-wave opacity flickering
        star.opacity =
          Math.sin(Date.now() * 0.001 * star.speed * 100) * 0.5 + 0.5;
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    initStars();
    animate();

    const handleResize = () => initStars();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
