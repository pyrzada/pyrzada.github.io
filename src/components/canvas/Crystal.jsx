import React, {Suspense, useEffect, useRef, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {
    Float,
    MeshDistortMaterial,
    OrbitControls,
    Sphere,
    Torus,
    Icosahedron,
} from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const DistortedCrystal = ({reduceMotion}) => {
    const meshRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        if (reduceMotion) return;
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.25;
            meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.4;
            innerRef.current.rotation.z = t * 0.3;
        }
    });

    return (
        <Float speed={reduceMotion ? 0 : 1.4} rotationIntensity={0.4} floatIntensity={1.2}>
            <group>
                <Sphere args={[2.2, 24, 24]}>
                    <meshBasicMaterial color="#7c5cff" transparent opacity={0.04}/>
                </Sphere>
                <Icosahedron ref={meshRef} args={[1.45, 2]}>
                    <MeshDistortMaterial
                        color="#7c5cff"
                        emissive="#22d3ee"
                        emissiveIntensity={0.45}
                        roughness={0.2}
                        metalness={0.75}
                        distort={reduceMotion ? 0 : 0.35}
                        speed={reduceMotion ? 0 : 1.6}
                    />
                </Icosahedron>
                <Icosahedron ref={innerRef} args={[0.85, 1]}>
                    <meshStandardMaterial
                        color="#22d3ee"
                        emissive="#7c5cff"
                        emissiveIntensity={0.6}
                        roughness={0}
                        metalness={1}
                        wireframe
                        transparent
                        opacity={0.35}
                    />
                </Icosahedron>
                <Torus args={[2.0, 0.012, 16, 80]} rotation={[Math.PI / 2.3, 0, 0]}>
                    <meshStandardMaterial
                        color="#22d3ee"
                        emissive="#22d3ee"
                        emissiveIntensity={1.6}
                        toneMapped={false}
                    />
                </Torus>
                <Torus args={[2.4, 0.008, 16, 80]} rotation={[Math.PI / 1.7, Math.PI / 4, 0]}>
                    <meshStandardMaterial
                        color="#7c5cff"
                        emissive="#7c5cff"
                        emissiveIntensity={1.4}
                        toneMapped={false}
                    />
                </Torus>
            </group>
        </Float>
    );
};

const CrystalCanvas = () => {
    const wrapRef = useRef(null);
    const [inView, setInView] = useState(true);
    const [mobile] = useState(isMobile);
    const [reduceMotion] = useState(prefersReducedMotion);

    useEffect(() => {
        if (!wrapRef.current || typeof IntersectionObserver === "undefined") return;
        const obs = new IntersectionObserver(
            ([e]) => setInView(e.isIntersecting),
            {rootMargin: "100px 0px"}
        );
        obs.observe(wrapRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={wrapRef} className="w-full h-full">
            <Canvas
                shadows={!mobile}
                frameloop={inView && !reduceMotion ? "always" : "demand"}
                dpr={mobile ? [1, 1.25] : [1, 1.75]}
                gl={{
                    preserveDrawingBuffer: false,
                    antialias: !mobile,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                camera={{position: [0, 0, 6], fov: 35, near: 0.1, far: 200}}
            >
                <Suspense fallback={<CanvasLoader/>}>
                    <ambientLight intensity={0.35}/>
                    <hemisphereLight color="#a78bfa" groundColor="#06070d" intensity={0.6}/>
                    <directionalLight position={[5, 5, 5]} intensity={1.4} color="#a78bfa"/>
                    <pointLight position={[-5, -3, -2]} intensity={1.2} color="#22d3ee"/>
                    <pointLight position={[5, -2, 3]} intensity={0.9} color="#fb7185"/>
                    {!mobile && (
                        <pointLight position={[0, 4, -4]} intensity={0.7} color="#7c5cff"/>
                    )}
                    <DistortedCrystal reduceMotion={reduceMotion}/>
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={!reduceMotion}
                        autoRotateSpeed={0.8}
                        maxPolarAngle={Math.PI / 1.5}
                        minPolarAngle={Math.PI / 3}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default CrystalCanvas;
