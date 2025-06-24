
import  { useEffect, useRef } from "react";

const DustParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const totalParticles = 500;
    const particles = [];

    for (let i = 0; i < totalParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedY: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.y -= p.speedY;
        if (p.y < -p.radius) {
          p.y = canvas.height + p.radius;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "50%",
        height: "210px",
        zIndex: 0,
        pointerEvents: "none",
        margin:"0 auto"
      }}
    />
  );
};

export default DustParticles;