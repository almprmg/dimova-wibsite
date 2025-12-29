import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowDown, Clock, Shield, CheckCircle } from "lucide-react";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Tree Component
const Tree = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const trunkMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#5d4037"),
    roughness: 0.9,
    metalness: 0,
  }), []);

  const leavesMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#2d5a3d"),
    roughness: 0.8,
    metalness: 0,
  }), []);

  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.6, 8]} />
        <primitive object={trunkMaterial} attach="material" />
      </mesh>
      {/* Foliage layers */}
      <mesh position={[0, 0.8, 0]}>
        <coneGeometry args={[0.35, 0.6, 8]} />
        <primitive object={leavesMaterial} attach="material" />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[0.28, 0.5, 8]} />
        <primitive object={leavesMaterial} attach="material" />
      </mesh>
      <mesh position={[0, 1.35, 0]}>
        <coneGeometry args={[0.2, 0.4, 8]} />
        <primitive object={leavesMaterial} attach="material" />
      </mesh>
    </group>
  );
};

// Palm Tree Component
const PalmTree = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const trunkMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#8b7355"),
    roughness: 0.95,
    metalness: 0,
  }), []);

  const leafMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#3d6b4a"),
    roughness: 0.7,
    metalness: 0,
    side: THREE.DoubleSide,
  }), []);

  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 8]} />
        <primitive object={trunkMaterial} attach="material" />
      </mesh>
      {/* Palm leaves */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <mesh 
          key={i} 
          position={[0, 1.2, 0]} 
          rotation={[0.5, THREE.MathUtils.degToRad(angle), 0]}
        >
          <boxGeometry args={[0.08, 0.02, 0.6]} />
          <primitive object={leafMaterial} attach="material" />
        </mesh>
      ))}
    </group>
  );
};

// Car Component
const Car = ({ position, rotation = 0, color = "#2c3e50" }: { position: [number, number, number]; rotation?: number; color?: string }) => {
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: 0.3,
    metalness: 0.8,
  }), [color]);

  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#1a3a4a"),
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.8,
    thickness: 0.2,
  }), []);

  const wheelMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1a1a1a"),
    roughness: 0.9,
    metalness: 0.1,
  }), []);

  return (
    <group position={position} rotation={[0, THREE.MathUtils.degToRad(rotation), 0]} scale={0.25}>
      {/* Car body */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.9, 0.2, 0.4]} />
        <primitive object={bodyMaterial} attach="material" />
      </mesh>
      {/* Cabin */}
      <mesh position={[0.05, 0.32, 0]}>
        <boxGeometry args={[0.5, 0.18, 0.36]} />
        <primitive object={glassMaterial} attach="material" />
      </mesh>
      {/* Wheels */}
      {[
        [-0.28, 0.08, 0.2],
        [-0.28, 0.08, -0.2],
        [0.28, 0.08, 0.2],
        [0.28, 0.08, -0.2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.05, 12]} />
          <primitive object={wheelMaterial} attach="material" />
        </mesh>
      ))}
      {/* Headlights */}
      <mesh position={[-0.45, 0.15, 0.12]}>
        <boxGeometry args={[0.02, 0.06, 0.08]} />
        <meshStandardMaterial color="#ffffcc" emissive="#ffff88" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.45, 0.15, -0.12]}>
        <boxGeometry args={[0.02, 0.06, 0.08]} />
        <meshStandardMaterial color="#ffffcc" emissive="#ffff88" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

// Street Lamp Component
const StreetLamp = ({ position }: { position: [number, number, number] }) => {
  const poleMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#3d3d3d"),
    roughness: 0.6,
    metalness: 0.4,
  }), []);

  return (
    <group position={position}>
      {/* Pole */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 1.2, 8]} />
        <primitive object={poleMaterial} attach="material" />
      </mesh>
      {/* Lamp head */}
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#fffde7" emissive="#fff59d" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

// Bench Component
const Bench = ({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) => {
  const woodMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#6d4c41"),
    roughness: 0.85,
    metalness: 0,
  }), []);

  const metalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#424242"),
    roughness: 0.5,
    metalness: 0.7,
  }), []);

  return (
    <group position={position} rotation={[0, THREE.MathUtils.degToRad(rotation), 0]} scale={0.4}>
      {/* Seat */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.6, 0.04, 0.2]} />
        <primitive object={woodMaterial} attach="material" />
      </mesh>
      {/* Back */}
      <mesh position={[0, 0.35, -0.08]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.03]} />
        <primitive object={woodMaterial} attach="material" />
      </mesh>
      {/* Legs */}
      {[-0.25, 0.25].map((x, i) => (
        <mesh key={i} position={[x, 0.1, 0]}>
          <boxGeometry args={[0.04, 0.2, 0.2]} />
          <primitive object={metalMaterial} attach="material" />
        </mesh>
      ))}
    </group>
  );
};

// Modern realistic building component
const RealisticBuilding = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Slow gentle rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  // Materials
  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#1a4a5e"),
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.9,
    thickness: 0.5,
    envMapIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }), []);

  const concreteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#e8e4de"),
    roughness: 0.9,
    metalness: 0.05,
  }), []);

  const darkConcreteMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#0F4F45"),
    roughness: 0.7,
    metalness: 0.1,
  }), []);

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#C3B07A"),
    roughness: 0.3,
    metalness: 0.8,
  }), []);

  const frameMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#2d2d2d"),
    roughness: 0.4,
    metalness: 0.6,
  }), []);

  const roadMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#3a3a3a"),
    roughness: 0.95,
    metalness: 0,
  }), []);

  const sidewalkMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#c9c5bd"),
    roughness: 0.9,
    metalness: 0,
  }), []);

  return (
    <group ref={groupRef} position={[0, -1.5, 0]} scale={0.7}>
      {/* Main Tower - Modern Glass Building */}
      <group position={[0, 0, 0]}>
        {/* Core structure */}
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[2.2, 5, 1.8]} />
          <primitive object={darkConcreteMaterial} attach="material" />
        </mesh>
        
        {/* Glass facade - front */}
        <mesh position={[0, 2.5, 0.95]}>
          <boxGeometry args={[2, 4.8, 0.05]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>
        
        {/* Glass facade - back */}
        <mesh position={[0, 2.5, -0.95]}>
          <boxGeometry args={[2, 4.8, 0.05]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>

        {/* Window frames - horizontal */}
        {[0.5, 1.5, 2.5, 3.5, 4.5].map((y, i) => (
          <mesh key={`h-${i}`} position={[0, y, 0.97]}>
            <boxGeometry args={[2.1, 0.05, 0.02]} />
            <primitive object={frameMaterial} attach="material" />
          </mesh>
        ))}

        {/* Window frames - vertical */}
        {[-0.6, 0, 0.6].map((x, i) => (
          <mesh key={`v-${i}`} position={[x, 2.5, 0.97]}>
            <boxGeometry args={[0.04, 4.9, 0.02]} />
            <primitive object={frameMaterial} attach="material" />
          </mesh>
        ))}

        {/* Top crown - gold accent */}
        <mesh position={[0, 5.1, 0]}>
          <boxGeometry args={[2.4, 0.2, 2]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>

        {/* Entrance canopy */}
        <mesh position={[0, 0.3, 1.2]}>
          <boxGeometry args={[1.5, 0.08, 0.6]} />
          <primitive object={goldMaterial} attach="material" />
        </mesh>

        {/* Entrance glass */}
        <mesh position={[0, 0.4, 1]}>
          <boxGeometry args={[0.8, 0.8, 0.03]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>
      </group>

      {/* Secondary Tower - Shorter */}
      <group position={[1.8, 0, 0.3]}>
        <mesh position={[0, 1.75, 0]}>
          <boxGeometry args={[1.4, 3.5, 1.2]} />
          <primitive object={concreteMaterial} attach="material" />
        </mesh>
        
        {/* Glass panels */}
        <mesh position={[0, 1.75, 0.65]}>
          <boxGeometry args={[1.2, 3.3, 0.03]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>

        {/* Horizontal accent lines */}
        {[0.8, 1.6, 2.4, 3.2].map((y, i) => (
          <mesh key={i} position={[0, y, 0.67]}>
            <boxGeometry args={[1.3, 0.04, 0.02]} />
            <primitive object={goldMaterial} attach="material" />
          </mesh>
        ))}

        {/* Top crown */}
        <mesh position={[0, 3.6, 0]}>
          <boxGeometry args={[1.5, 0.15, 1.3]} />
          <primitive object={darkConcreteMaterial} attach="material" />
        </mesh>
      </group>

      {/* Tertiary Structure - Podium */}
      <group position={[-1.5, 0, 0.5]}>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[1.6, 1.2, 1.4]} />
          <primitive object={concreteMaterial} attach="material" />
        </mesh>
        
        {/* Large glass window */}
        <mesh position={[0, 0.6, 0.75]}>
          <boxGeometry args={[1.3, 0.9, 0.03]} />
          <primitive object={glassMaterial} attach="material" />
        </mesh>

        {/* Rooftop garden edge */}
        <mesh position={[0, 1.25, 0]}>
          <boxGeometry args={[1.7, 0.1, 1.5]} />
          <primitive object={darkConcreteMaterial} attach="material" />
        </mesh>
      </group>

      {/* Ground / Platform - Extended */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#7cb342" roughness={0.95} metalness={0} />
      </mesh>

      {/* Sidewalk around building */}
      <mesh position={[0, 0, 2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 1.5]} />
        <primitive object={sidewalkMaterial} attach="material" />
      </mesh>

      {/* Road */}
      <mesh position={[0, 0.01, 3.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 1.2]} />
        <primitive object={roadMaterial} attach="material" />
      </mesh>

      {/* Road markings */}
      {[-3, 0, 3].map((x, i) => (
        <mesh key={i} position={[x, 0.02, 3.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.8, 0.08]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Trees */}
      <Tree position={[-3, 0, 1.5]} scale={1.2} />
      <Tree position={[-3.5, 0, 0.5]} scale={1} />
      <Tree position={[3.2, 0, 1.2]} scale={1.1} />
      <PalmTree position={[-2.5, 0, 2]} scale={1.3} />
      <PalmTree position={[2.8, 0, 2.2]} scale={1.1} />
      <Tree position={[3.8, 0, -0.5]} scale={0.9} />
      <Tree position={[-3.8, 0, -0.8]} scale={1.15} />

      {/* Cars on road */}
      <Car position={[-1.5, 0, 3.2]} rotation={90} color="#c0392b" />
      <Car position={[2, 0, 3.2]} rotation={-90} color="#2980b9" />
      <Car position={[4, 0, 3.2]} rotation={-90} color="#1a1a1a" />

      {/* Parked cars */}
      <Car position={[-2.8, 0, 1.8]} rotation={0} color="#7f8c8d" />
      <Car position={[3.5, 0, 1.8]} rotation={180} color="#f5f5f5" />

      {/* Street lamps */}
      <StreetLamp position={[-2, 0, 2.3]} />
      <StreetLamp position={[2, 0, 2.3]} />
      <StreetLamp position={[4.5, 0, 2.3]} />

      {/* Benches */}
      <Bench position={[-2.5, 0, 1.2]} rotation={45} />
      <Bench position={[3, 0, 0.8]} rotation={-30} />
    </group>
  );
};

const Hero3D = () => {
  const features = [
    { icon: Clock, text: "الالتزام بالمواعيد" },
    { icon: Shield, text: "إشراف ميداني" },
    { icon: CheckCircle, text: "جودة وتشطيب دقيق" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              ديموفا للمقاولات
              <br />
              <span className="text-secondary">والتشطيبات</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-accent font-montserrat font-medium mb-6"
            >
              Built to Last. Finished to Impress.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 lg:ml-auto"
            >
              تنفيذ تشطيبات داخلية باحترافية، التزام بالمواعيد، وإشراف ميداني لضمان الجودة.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-12"
            >
              <a href="#contact" className="btn-accent text-center">
                اطلب عرض سعر
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                واتساب
              </a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-end"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[400px] lg:h-[500px] order-1 lg:order-2"
          >
            <Canvas 
              camera={{ position: [6, 4, 8], fov: 35 }}
              shadows
              gl={{ antialias: true, alpha: true }}
            >
              <color attach="background" args={["#f8f7f4"]} />
              <fog attach="fog" args={["#f8f7f4", 10, 30]} />
              
              {/* Lighting setup for realism */}
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[10, 15, 10]} 
                intensity={1.5} 
                castShadow
                shadow-mapSize={[2048, 2048]}
              />
              <directionalLight position={[-5, 10, -5]} intensity={0.3} color="#C3B07A" />
              <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
              
              <Suspense fallback={null}>
                <RealisticBuilding />
                <ContactShadows 
                  position={[0, -1.55, 0]} 
                  opacity={0.4} 
                  scale={12} 
                  blur={2.5} 
                  far={4}
                />
                <Environment preset="city" />
              </Suspense>
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 4}
              />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">اكتشف المزيد</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
