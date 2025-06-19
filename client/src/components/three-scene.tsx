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

      // Draw manga-style floating elements
      const centerX = xOffset;
      const centerY = canvas.height / 2 + yOffset;
      const radius = 40 * scale;

      // Draw manga-style speech bubble
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.lineWidth = 3;
      
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius + 20, radius + 10, rotation + mouseInfluence.x, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Add speech bubble tail
      ctx.beginPath();
      ctx.moveTo(centerX - 20, centerY + radius);
      ctx.lineTo(centerX - 35, centerY + radius + 15);
      ctx.lineTo(centerX - 10, centerY + radius + 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw manga text inside bubble
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.font = 'bold 16px Bangers, cursive';
      ctx.textAlign = 'center';
      ctx.fillText('POW!', centerX, centerY);

      // Draw action lines radiating from center
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 8; i++) {
        const angle = (rotation + mouseInfluence.y) + (i * Math.PI / 4);
        const startX = centerX + Math.cos(angle) * (radius + 25);
        const startY = centerY + Math.sin(angle) * (radius + 25);
        const endX = centerX + Math.cos(angle) * (radius + 45);
        const endY = centerY + Math.sin(angle) * (radius + 45);
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Draw floating manga symbols
      const symbols = ['★', '♦', '●', '▲'];
      ctx.fillStyle = 'rgba(255, 100, 100, 0.7)';
      ctx.font = 'bold 20px Arial';
      
      for (let i = 0; i < symbols.length; i++) {
        const orbitAngle = rotation * (1 + i * 0.3) + mouseInfluence.x + (i * Math.PI / 2);
        const orbitRadius = radius + 60 + Math.sin(rotation * 2 + i) * 10;
        const symbolX = centerX + Math.cos(orbitAngle) * orbitRadius;
        const symbolY = centerY + Math.sin(orbitAngle) * orbitRadius;
        
        ctx.save();
        ctx.translate(symbolX, symbolY);
        ctx.rotate(rotation + i);
        ctx.fillText(symbols[i], 0, 0);
        ctx.restore();
      }

      // Draw speed lines for dynamic effect
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const lineY = centerY - 100 + i * 40;
        const lineLength = 200 + Math.sin(rotation + i) * 50;
        ctx.beginPath();
        ctx.moveTo(centerX - lineLength/2, lineY);
        ctx.lineTo(centerX + lineLength/2, lineY);
        ctx.stroke();
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
