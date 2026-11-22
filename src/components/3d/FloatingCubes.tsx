"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

interface CubeData {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  speed: number;
  rotationSpeed: [number, number, number];
  isGlowing?: boolean;
  accentColor?: string;
}

export const FloatingCubes: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Cubes positioned on the RIGHT half of the viewport to keep text on the left 100% unobstructed!
  const cubes: CubeData[] = useMemo(() => {
    return [
      // Primary foreground focal cube (center-right)
      {
        position: [2.6, 0.2, 0.2],
        rotation: [0.4, 0.6, 0.2],
        scale: [1.85, 1.85, 1.85],
        speed: 0.8,
        rotationSpeed: [0.003, 0.005, 0.002],
        isGlowing: true,
      },
      // Upper right cube
      {
        position: [1.4, 2.0, -0.5],
        rotation: [0.8, -0.4, 0.3],
        scale: [1.15, 1.15, 1.15],
        speed: 0.6,
        rotationSpeed: [-0.002, 0.004, 0.003],
      },
      // Lower right cube
      {
        position: [3.6, -1.5, -0.3],
        rotation: [-0.3, 0.5, 0.8],
        scale: [1.25, 1.25, 1.25],
        speed: 0.9,
        rotationSpeed: [0.004, -0.003, 0.002],
        isGlowing: true,
      },
      // Midground right cube
      {
        position: [2.0, -2.2, -1.2],
        rotation: [0.2, 0.2, -0.5],
        scale: [1.0, 1.0, 1.0],
        speed: 0.5,
        rotationSpeed: [0.002, 0.002, -0.003],
      },
      // Far upper right
      {
        position: [3.8, 1.9, -1.5],
        rotation: [-0.5, 0.8, 0.1],
        scale: [0.95, 0.95, 0.95],
        speed: 0.7,
        rotationSpeed: [-0.003, 0.003, 0.001],
      },
      // Background right atmosphere
      {
        position: [4.4, 0.4, -2.5],
        rotation: [0.6, -0.7, 0.3],
        scale: [0.85, 0.85, 0.85],
        speed: 0.4,
        rotationSpeed: [0.001, 0.003, -0.002],
      },
      // Distant deep background accent (deep behind, never obstructing text)
      {
        position: [-3.8, 2.6, -4.5],
        rotation: [-0.3, 0.6, -0.4],
        scale: [0.6, 0.6, 0.6],
        speed: 0.3,
        rotationSpeed: [-0.002, 0.002, 0.002],
        isGlowing: true,
      },
      // Distant lower background accent
      {
        position: [-4.2, -2.4, -4.5],
        rotation: [0.4, 0.2, 0.7],
        scale: [0.55, 0.55, 0.55],
        speed: 0.35,
        rotationSpeed: [0.002, -0.002, 0.004],
      },
    ];
  }, []);

  // Floating warm ember particles (concentrated toward the right side)
  const particles = useMemo(() => {
    const count = 40;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.2) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 0.5;
    }
    return pos;
  }, []);

  const boxGeometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);

  // Standard metallic cube material:
  // In Dark Mode: dark metallic charcoal (#18212B)
  // In Light Mode: crisp ceramic slate (#CBD5E1) with warm orange reflections
  const solidCubeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(isLight ? "#94A3B8" : "#18212B"),
        roughness: isLight ? 0.3 : 0.25,
        metalness: isLight ? 0.5 : 0.85,
        envMapIntensity: 1.2,
      }),
    [isLight]
  );

  // Glowing warm orange cube material
  const glowingCubeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(isLight ? "#FB923C" : "#18212B"),
        emissive: new THREE.Color("#FF8A32"),
        emissiveIntensity: isLight ? 0.9 : 0.6,
        roughness: 0.2,
        metalness: isLight ? 0.3 : 0.85,
      }),
    [isLight]
  );

  // Wireframe accent
  const wireframeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#FF8A32"),
        wireframe: true,
        transparent: true,
        opacity: isLight ? 0.7 : 0.35,
      }),
    [isLight]
  );

  // Window mouse move listener
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Per-frame physics oscillation & parallax tilt
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.2;
      groupRef.current.rotation.x = -mouse.current.y * 0.15;

      groupRef.current.children.forEach((child, index) => {
        if (child.type === "Mesh" || child.type === "Group") {
          const cube = cubes[index % cubes.length];
          if (cube) {
            child.position.y =
              cube.position[1] +
              Math.sin(time * cube.speed + index) * 0.12;
            child.position.x =
              cube.position[0] +
              Math.cos(time * (cube.speed * 0.7) + index) * 0.06;

            child.rotation.x += cube.rotationSpeed[0];
            child.rotation.y += cube.rotationSpeed[1];
            child.rotation.z += cube.rotationSpeed[2];
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, idx) => (
        <group key={idx} position={cube.position} rotation={cube.rotation}>
          <mesh
            geometry={boxGeometry}
            material={cube.isGlowing ? glowingCubeMaterial : solidCubeMaterial}
            scale={cube.scale}
            castShadow
            receiveShadow
          />
          {idx % 2 === 0 && (
            <mesh
              geometry={boxGeometry}
              material={wireframeMaterial}
              scale={[
                cube.scale[0] * 1.02,
                cube.scale[1] * 1.02,
                cube.scale[2] * 1.02,
              ]}
            />
          )}
        </group>
      ))}

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isLight ? 0.07 : 0.06}
          color="#FF8A32"
          transparent
          opacity={isLight ? 0.75 : 0.65}
          sizeAttenuation
        />
      </points>
    </group>
  );
};
