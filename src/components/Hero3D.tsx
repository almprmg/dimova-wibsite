import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowDown, Clock, Shield, CheckCircle } from "lucide-react";
import { Suspense } from "react";

import {  RoundedBox } from "@react-three/drei";

const Building3D = () => {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
      <group castShadow receiveShadow>

        {/* Main Building */}
        <RoundedBox
          args={[2.2, 3.2, 1.6]}
          radius={0.08}
          smoothness={6}
          position={[0, 0, 0]}
          castShadow
        >
      <meshPhysicalMaterial
  color="#C3B07A"
  metalness={0.9}
  roughness={0.15}
  clearcoat={0.6}
  clearcoatRoughness={0.05}
/>

        </RoundedBox>

        {/* Front Accent Panel */}
        <RoundedBox
          args={[1.8, 2.8, 0.15]}
          radius={0.05}
          smoothness={4}
          position={[0, 0.1, 0.85]}
        >
          <meshStandardMaterial
            color="#C3B07A"
            metalness={0.8}
            roughness={0.25}
          />
        </RoundedBox>

        {/* Windows */}
        {[-0.8, -0.2, 0.4].map((y, i) => (
          <RoundedBox
            key={i}
            args={[1.3, 0.35, 0.05]}
            radius={0.03}
            smoothness={4}
            position={[0, y, 0.93]}
          >
            <meshStandardMaterial
              color="#1E3F3A"
              metalness={0.2}
              roughness={0.1}
              emissive="#3F7F73"
              emissiveIntensity={0.4}
            />
          </RoundedBox>
        ))}

        {/* Side Tower */}
        <RoundedBox
          args={[0.85, 4.2, 0.85]}
          radius={0.06}
          smoothness={6}
          position={[1.6, 0.5, 0]}
          castShadow
        >
          <meshStandardMaterial
            color="#2F6F65"
            roughness={0.45}
            metalness={0.5}
          />
        </RoundedBox>

        {/* Tower Crown */}
        <RoundedBox
          args={[1, 0.25, 1]}
          radius={0.08}
          smoothness={6}
          position={[1.6, 2.7, 0]}
        >
       <meshPhysicalMaterial
  color="#C3B07A"
  metalness={0.9}
  roughness={0.15}
  clearcoat={0.6}
  clearcoatRoughness={0.05}
/>

        </RoundedBox>

      </group>
    </Float>
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              ديموفا للمقاولات والتشطيبات
              <br />
              {/* <span className="text-secondary">والتشطيبات</span> */}
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-accent font-montserrat font-medium mb-6"
            >
              Built to Last. Finished to Impress.
            </motion.p> */}
                        <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-accent font-montserrat font-medium mb-6"
            >
           صُممت لتدوم. أُنجزت لتُثير الإعجاب.
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
            <Canvas camera={{ position: [5, 3, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C3B07A" />
              <Suspense fallback={null}>
                <Building3D />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
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
