"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

export const SceneLights: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <>
      {/* Ambient fill calibrated for smooth contrast */}
      <ambientLight
        color={isLight ? "#F8FAFC" : "#18212B"}
        intensity={isLight ? 1.5 : 1.2}
      />

      {/* Main warm orange key directional light with shadows */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={isLight ? 2.5 : 2.8}
        color="#FF8A32"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={25}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0001}
      />

      {/* Secondary warm fill light */}
      <directionalLight
        position={[-5, 3, 4]}
        intensity={isLight ? 1.0 : 1.2}
        color={isLight ? "#FFB45C" : "#FFB45C"}
      />

      {/* Warm orange point lights that illuminate cube clusters on the right */}
      <pointLight
        position={[2.8, 0.5, 2]}
        intensity={isLight ? 3.5 : 3.5}
        distance={9}
        color="#FF8A32"
      />

      <pointLight
        position={[4, -1, 1]}
        intensity={2.2}
        distance={7}
        color="#FFB45C"
      />

      {/* Subtle rim light */}
      <pointLight
        position={[0, 4, -4]}
        intensity={isLight ? 0.8 : 1.0}
        distance={10}
        color={isLight ? "#CBD5E1" : "#2a3b4c"}
      />
    </>
  );
};
