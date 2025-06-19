import { useRef, useEffect, useState } from "react";

interface FloatingModelProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

function FloatingModel({ mousePosition, scrollY }: FloatingModelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update rotation
      rotation += 0.01;

      // React to scroll position
      const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      const yOffset = Math.sin(scrollProgress * Math.PI * 2) * 50;
      const xOffset = 200 + Math.cos(scrollProgress * Math.PI * 2) * 30;

      // React to mouse movement
      const mouseInfluence = {
        x: mousePosition.x * 0.0002,
        y: mousePosition.y * 0.0002
      };

      // Scale based on scroll
      const scale = 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.1;

      // Draw animated geometric shape
      const centerX = xOffset;
      const centerY = canvas.height / 2 + yOffset;
      const radius = 60 * scale;

      // Draw outer ring
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 20, rotation + mouseInfluence.x, rotation + mouseInfluence.x + Math.PI * 1.5);
      ctx.stroke();

      // Draw inner shape
      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (rotation + mouseInfluence.y) + (i * Math.PI / 3);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw center sphere
      ctx.fillStyle = 'rgba(6, 182, 212, 0.9)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 15 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbiting particles
      for (let i = 0; i < 3; i++) {
        const orbitAngle = rotation * (1 + i * 0.5) + mouseInfluence.x;
        const orbitRadius = radius + 30 + i * 15;
        const particleX = centerX + Math.cos(orbitAngle) * orbitRadius;
        const particleY = centerY + Math.sin(orbitAngle) * orbitRadius;
        
        ctx.fillStyle = `rgba(6, 182, 212, ${0.7 - i * 0.2})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    />
  );
}

export default function ThreeScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    const handleResize = () => {
      // Force re-render on resize
      setMousePosition(prev => ({ ...prev }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <FloatingModel mousePosition={mousePosition} scrollY={scrollY} />;
}
