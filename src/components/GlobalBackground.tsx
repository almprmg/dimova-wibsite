import { useEffect, useRef } from "react";

const GlobalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGrid = () => {
      const spacing = 80;
      ctx.strokeStyle = "rgba(47, 111, 101, 0.15)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bg.addColorStop(0, "rgba(255,255,255,0.85)");
      bg.addColorStop(1, "rgba(250,250,250,0.95)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      const arcX = canvas.width * 0.25;
      const arcY = canvas.height * 0.7;
      const arcR = 220 + Math.sin(time) * 10;
      ctx.beginPath();
      ctx.arc(arcX, arcY, arcR, Math.PI * 1.1, Math.PI * 1.9);
      ctx.strokeStyle = "rgba(195, 176, 122, 0.35)";
      ctx.lineWidth = 4;
      ctx.stroke();

      const beamX = canvas.width * 0.7;
      const beamY = canvas.height * 0.35 + Math.sin(time * 2) * 20;
      ctx.save();
      ctx.translate(beamX, beamY);
      ctx.rotate(Math.sin(time * 0.8) * 0.15);
      const beamGrad = ctx.createLinearGradient(-120, 0, 120, 0);
      beamGrad.addColorStop(0, "rgba(195,176,122,0)");
      beamGrad.addColorStop(0.5, "rgba(195,176,122,0.55)");
      beamGrad.addColorStop(1, "rgba(195,176,122,0)");
      ctx.fillStyle = beamGrad;
      ctx.fillRect(-120, -2, 240, 4);
      ctx.restore();

      for (let i = 0; i < 18; i++) {
        const px = (canvas.width / 18) * i + Math.sin(time + i) * 25;
        const py = canvas.height * 0.5 + Math.sin(time * 0.6 + i * 0.4) * 90;
        const s = 2 + Math.sin(time + i) * 0.8;
        ctx.beginPath();
        ctx.arc(px, py, s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(47,111,101, ${0.25 + Math.sin(time + i) * 0.15})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};

export default GlobalBackground;

