'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    r: number;
    baseOpacity: number;
    twinkleSpeed: number;
    phase: number;
}

export default function StarfieldCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Sprinkle of tiny stars + a handful of larger ones
        const stars: Star[] = [
            // 180 tiny background stars
            ...Array.from({ length: 180 }, () => ({
                x: Math.random(),
                y: Math.random(),
                r: Math.random() * 0.9 + 0.2,
                baseOpacity: Math.random() * 0.55 + 0.2,
                twinkleSpeed: Math.random() * 0.012 + 0.003,
                phase: Math.random() * Math.PI * 2,
            })),
            // 20 medium stars
            ...Array.from({ length: 20 }, () => ({
                x: Math.random(),
                y: Math.random(),
                r: Math.random() * 0.8 + 1.2,
                baseOpacity: Math.random() * 0.4 + 0.5,
                twinkleSpeed: Math.random() * 0.008 + 0.002,
                phase: Math.random() * Math.PI * 2,
            })),
            // 6 bright large stars
            ...Array.from({ length: 6 }, () => ({
                x: Math.random(),
                y: Math.random(),
                r: Math.random() * 0.8 + 2.0,
                baseOpacity: 0.9,
                twinkleSpeed: Math.random() * 0.005 + 0.001,
                phase: Math.random() * Math.PI * 2,
            })),
        ];

        let animId: number;
        let t = 0;

        const draw = () => {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            for (const star of stars) {
                const twinkle = star.baseOpacity * (0.5 + 0.5 * Math.sin(t * star.twinkleSpeed + star.phase));
                ctx.beginPath();
                ctx.arc(star.x * w, star.y * h, star.r, 0, Math.PI * 2);
                // Slight blue-white colour for variety
                const blue = Math.floor(220 + Math.random() * 35);
                ctx.fillStyle = `rgba(235, 240, ${blue}, ${twinkle})`;
                ctx.fill();
            }

            t += 1;
            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', setSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
