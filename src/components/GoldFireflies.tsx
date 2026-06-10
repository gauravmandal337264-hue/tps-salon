import { useEffect, useRef } from 'react';

export default function GoldFireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle representation
    interface Firefly {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      alphaDir: number;
      speedX: number;
      speedY: number;
      flickerSpeed: number;
      phase: number;
    }

    const firefliesCount = Math.max(8, Math.min(25, Math.floor((width * height) / 80000)));
    const fireflies: Firefly[] = [];

    // Initialize fireflies
    for (let i = 0; i < firefliesCount; i++) {
      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.8, // 0.8 to 2.3px (slightly finer particles)
        baseAlpha: Math.random() * 0.3 + 0.2, // increased base brightness (0.2 to 0.5) to support 80% visibility
        alpha: Math.random() * 0.3,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        speedX: (Math.random() - 0.5) * 0.25, // very gentle horizontal drift
        speedY: -(Math.random() * 0.35 + 0.1), // drifting slowly upwards
        flickerSpeed: Math.random() * 0.012 + 0.003,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Handles window resizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = (time: number) => {
      // Clear with slight alpha to handle motion trail (optional, but pure clear is crisper with glows)
      ctx.clearRect(0, 0, width, height);

      // Draw and update each firefly
      for (let i = 0; i < fireflies.length; i++) {
        const p = fireflies[i];

        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Wave motion for organic pathing
        p.x += Math.sin(time * 0.001 + p.phase) * 0.15;

        // Animate glow/pulsing alpha
        p.alpha += p.alphaDir * p.flickerSpeed;
        if (p.alpha >= p.baseAlpha) {
          p.alpha = p.baseAlpha;
          p.alphaDir = -1;
        } else if (p.alpha <= 0.02) {
          p.alpha = 0.02;
          p.alphaDir = 1;
        }

        // Boundary wrap-around
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        } else if (p.y > height + 10) {
          p.y = -10;
        }

        // Render glow effect around the golden dot
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${p.alpha})`);      // Pure Solid Gold
        gradient.addColorStop(0.35, `rgba(212, 175, 55, ${p.alpha * 0.4})`); // Champagne Dull Gold
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');                    // Transparent Fade

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Render bright core of the firefly
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 253, 240, ${p.alpha * 1.2 > 1 ? 1 : p.alpha * 1.2})`;
        ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-[1] mix-blend-screen opacity-80"
      style={{ backfaceVisibility: 'hidden' }}
    />
  );
}
