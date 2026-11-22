"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { SceneLights } from "./SceneLights";
import { FloatingCubes } from "./FloatingCubes";
import { useTheme } from "@/context/ThemeContext";

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    </div>
  );
}

export const HeroScene: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return <CanvasLoader />;
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background radial glow placed BEHIND canvas */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isLight
            ? "bg-[radial-gradient(circle_at_65%_40%,rgba(255,138,50,0.18)_0%,rgba(255,180,92,0.05)_45%,transparent_70%)]"
            : "bg-[radial-gradient(circle_at_65%_40%,rgba(255,138,50,0.14)_0%,rgba(24,33,43,0.5)_50%,#111923_90%)]"
        }`}
      />

      {/* 3D Canvas */}
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          shadows
          camera={{
            position: [0, 0, isMobile ? 7.6 : 7.2],
            fov: isMobile ? 46 : 45,
          }}
          dpr={[1, isMobile ? 1.25 : 1.75]}
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            alpha: true,
          }}
          className="w-full h-full pointer-events-none sm:pointer-events-auto z-10"
        >
          <SceneLights />
          <FloatingCubes />
          <ContactShadows
            position={[isMobile ? 0 : 2.6, isMobile ? -2.8 : -3.4, 0]}
            opacity={isLight ? 0.35 : 0.55}
            scale={isMobile ? 10 : 16}
            blur={2.5}
            far={8}
            color={isLight ? "#475569" : "#000000"}
          />
        </Canvas>
      </Suspense>

      {/* Subtle bottom fade for seamless transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

export default HeroScene;
