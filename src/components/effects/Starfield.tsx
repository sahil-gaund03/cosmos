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
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

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
        // Subtle color variation based on size
        if (star.size > 1.2) {
          ctx.fillStyle = `rgba(187, 195, 255, ${star.opacity})`; // Primary tint
        } else if (star.size < 0.5) {
          ctx.fillStyle = `rgba(130, 150, 255, ${star.opacity * 0.7})`; // Deeper blue
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`; // White
        }
        
        // Apply parallax offset based on star depth (size)
        const depth = star.size;
        const parallaxX = mouseRef.current.x * depth * -0.5;
        const parallaxY = mouseRef.current.y * depth * -0.5;
        
        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y + parallaxY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow upward drift
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;

        // Sine-wave opacity flickering
        star.opacity =
          Math.sin(Date.now() * 0.001 * star.speed * 100) * 0.5 + 0.5;
      });

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      animationRef.current = requestAnimationFrame(animate);
    }

    initStars();
    animate();

    const handleResize = () => initStars();
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on screen center
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
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
