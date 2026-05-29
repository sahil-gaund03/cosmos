"use client";

import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { PlanetPhysics } from "@/lib/services/solarService";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

interface SolarSystemCanvasProps {
  planets: PlanetPhysics[];
  selectedPlanet: PlanetPhysics | null;
  speedMultiplier: number;
  isPaused: boolean;
  onSelectPlanet: (planet: PlanetPhysics) => void;
}

function CameraController({ selectedPlanet, meshesRef }: { selectedPlanet: PlanetPhysics | null, meshesRef: React.MutableRefObject<Record<string, THREE.Group | null>> }) {
  const controlsRef = useRef<any>(null);
  const v = new THREE.Vector3();
  const target = new THREE.Vector3();

  useFrame((state, delta) => {
    if (!controlsRef.current) return;
    
    // Smooth camera target and position
    if (selectedPlanet && meshesRef.current[selectedPlanet.id]) {
      const mesh = meshesRef.current[selectedPlanet.id];
      if (mesh) {
        mesh.getWorldPosition(v);
        
        // Smoothly move controls target to planet
        controlsRef.current.target.lerp(v, 3 * delta);
        
        // Desired camera position
        const offset = selectedPlanet.id === "sun" ? 10 : selectedPlanet.radius * 5 + 3;
        target.copy(v).add(new THREE.Vector3(offset * 0.7, offset * 0.4, offset * 1.2));
        
        state.camera.position.lerp(target, 3 * delta);
      }
    } else {
      // Default view when free view is active
      controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), 2 * delta);
    }
    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.03}
      maxDistance={250}
      minDistance={1.5}
      zoomSpeed={0.8}
      rotateSpeed={0.6}
    />
  );
}

function PlanetTextured({ planet, isSelected, hovered }: { planet: PlanetPhysics, isSelected: boolean, hovered: boolean }) {
  const isSun = planet.id === "sun";
  
  const texturePaths: Record<string, string> = {
    sun: "/textures/planets/sun.jpg",
    mercury: "/textures/planets/mercury.jpg",
    venus: "/textures/planets/venus.jpg",
    earth: "/textures/planets/earth.jpg",
    mars: "/textures/planets/mars.jpg",
    jupiter: "/textures/planets/jupiter.jpg",
    saturn: "/textures/planets/saturn.jpg",
    uranus: "/textures/planets/uranus.jpg",
    neptune: "/textures/planets/neptune.jpg",
  };

  const cloudPaths: Record<string, string> = {
    earth: "/textures/planets/earthClouds.jpg",
    venus: "/textures/planets/venusAtmosphere.jpg"
  };

  const hasClouds = cloudPaths[planet.id] !== undefined;

  const texture = useTexture(texturePaths[planet.id] || "/textures/planets/mercury.jpg");
  const clouds = useTexture(hasClouds ? cloudPaths[planet.id] : "/textures/planets/mercury.jpg"); // Fallback unused

  const ringTexture = planet.hasRings ? useTexture("/textures/planets/saturnRing.png") : null;

  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[planet.radius, 64, 64]} />
        {isSun ? (
          <meshBasicMaterial map={texture} />
        ) : (
          <meshStandardMaterial
            map={texture}
            roughness={0.6}
            metalness={0.1}
            emissive={isSelected || hovered ? new THREE.Color(planet.color) : new THREE.Color("#000000")}
            emissiveIntensity={isSelected ? 0.4 : hovered ? 0.2 : 0}
          />
        )}
      </mesh>

      {hasClouds && (
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[planet.radius * 1.015, 64, 64]} />
          <meshStandardMaterial
            map={clouds}
            transparent
            opacity={planet.id === "venus" ? 0.8 : 0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Sun Volumetric Glow */}
      {isSun && (
        <mesh>
          <sphereGeometry args={[planet.radius * 1.4, 64, 64]} />
          <meshBasicMaterial
            color="#ffaa00"
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Rings */}
      {planet.hasRings && ringTexture && (
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[planet.radius * 1.4, planet.radius * 2.5, 128]} />
          <meshStandardMaterial
            map={ringTexture}
            color="#ffffff"
            side={THREE.DoubleSide}
            transparent
            opacity={0.9}
            roughness={0.8}
          />
        </mesh>
      )}
    </>
  );
}

function Planet({
  planet,
  isPaused,
  speedMultiplier,
  onClick,
  meshesRef,
  isSelected
}: {
  planet: PlanetPhysics;
  isPaused: boolean;
  speedMultiplier: number;
  onClick: (p: PlanetPhysics) => void;
  meshesRef: React.MutableRefObject<Record<string, THREE.Group | null>>;
  isSelected: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);
  const [angle, setAngle] = useState(() => Math.random() * Math.PI * 2);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!groupRef.current || !meshRef.current) return;

    if (planet.id !== "sun") {
      if (!isPaused) {
        setAngle((prev) => prev + planet.orbitSpeed * speedMultiplier * 0.5);
      }
      groupRef.current.position.x = planet.orbitRadius * Math.cos(angle);
      groupRef.current.position.z = planet.orbitRadius * Math.sin(angle);
      meshRef.current.rotation.y += 0.005;
    } else {
      meshRef.current.rotation.y += 0.001;
    }
  });

  if (groupRef.current) {
    meshesRef.current[planet.id] = groupRef.current;
  }

  return (
    <group ref={groupRef}>
      <group
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(planet);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[planet.radius, 32, 32]} />
            <meshStandardMaterial color={planet.color} wireframe />
          </mesh>
        }>
          <PlanetTextured planet={planet} isSelected={isSelected} hovered={hovered} />
        </Suspense>
      </group>

      {!isSelected && hovered && (
        <Html distanceFactor={15} center zIndexRange={[100, 0]}>
          <div className="bg-surface-container-highest/90 border border-outline-variant/30 text-on-surface text-[10px] font-mono px-3 py-1.5 rounded shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md whitespace-nowrap pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: planet.color }} />
            {planet.name.toUpperCase()}
          </div>
        </Html>
      )}
    </group>
  );
}

function OrbitLines({ planets }: { planets: PlanetPhysics[] }) {
  return (
    <>
      {planets.map((p) => {
        if (p.id === "sun") return null;
        return (
          <mesh key={`orbit-${p.id}`} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[p.orbitRadius, p.orbitRadius + 0.03, 256]} />
            <meshBasicMaterial color="#bbc3ff" transparent opacity={0.08} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </>
  );
}

function AsteroidBelt() {
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Asteroid belt is between Mars (11.5) and Jupiter (15.5)
      const radius = 12.5 + Math.random() * 2.0;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.5; // slight thickness
      pos[i * 3] = radius * Math.cos(angle);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(angle);
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#888888" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function SolarSystemCanvas({
  planets,
  selectedPlanet,
  speedMultiplier,
  isPaused,
  onSelectPlanet,
}: SolarSystemCanvasProps) {
  const meshesRef = useRef<Record<string, THREE.Group | null>>({});

  return (
    <div className="w-full h-full relative z-0 bg-[#020205] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 40, 50], fov: 50 }}
        gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#020205"]} />
        <ambientLight intensity={0.05} color="#ffffff" />
        
        {/* Main Sun light */}
        <pointLight position={[0, 0, 0]} intensity={800} color="#fff1e8" distance={300} decay={2} />
        
        {/* Deep space stars */}
        <Stars radius={150} depth={50} count={6000} factor={6} saturation={0.8} fade speed={0.5} />

        {/* Ambient space dust */}
        <Stars radius={40} depth={10} count={1000} factor={2} saturation={0} fade speed={1.5} />

        <OrbitLines planets={planets} />
        <AsteroidBelt />

        {planets.map((p) => (
          <Planet
            key={p.id}
            planet={p}
            isPaused={isPaused}
            speedMultiplier={speedMultiplier}
            onClick={onSelectPlanet}
            meshesRef={meshesRef}
            isSelected={selectedPlanet?.id === p.id}
          />
        ))}

        <CameraController selectedPlanet={selectedPlanet} meshesRef={meshesRef} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
