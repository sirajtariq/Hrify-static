import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ProfileNode {
  id: string;
  name: string;
  role: string;
  avatar: string;
  xPercent: number; // percentage relative to container
  yPercent: number;
  depth: number;
}

const profileNodes: ProfileNode[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Product Lead',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    xPercent: 12,
    yPercent: 18,
    depth: 1.1,
  },
  {
    id: '2',
    name: 'Zayn Malik',
    role: 'DevOps Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    xPercent: 10,
    yPercent: 55,
    depth: 0.95,
  },
  {
    id: '3',
    name: 'Jessica Williams',
    role: 'HR Director',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    xPercent: 86,
    yPercent: 18,
    depth: 1.05,
  },
  {
    id: '4',
    name: 'David Miller',
    role: 'Operations Head',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    xPercent: 88,
    yPercent: 54,
    depth: 1.0,
  },
  {
    id: '5',
    name: 'Amina Al-Mansoor',
    role: 'Talent Acquisition',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    xPercent: 84,
    yPercent: 82,
    depth: 0.9,
  },
];

export const Globe3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 560;
    const height = container.clientHeight || 560;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.85;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Texture Loader for Real World Earth
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/assets/earth-blue-marble.jpg');
    const bumpTexture = textureLoader.load('/assets/earth-topology.png');

    // Real World Earth Sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.04,
      specular: new THREE.Color(0x2563eb),
      shininess: 18,
      emissive: new THREE.Color(0x05133d),
      emissiveIntensity: 0.4,
    });
    const earthSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(earthSphere);

    // Atmosphere Halo Sphere (Glowing blue rim)
    const haloGeometry = new THREE.SphereGeometry(1.025, 48, 48);
    const haloMaterial = new THREE.MeshPhongMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
    haloMesh.scale.set(1.15, 1.15, 1.15);
    scene.add(haloMesh);

    // Subtle Digital Network Coordinate Dots on Earth
    const markerCount = 180;
    const markerGeo = new THREE.BufferGeometry();
    const markerPositions = new Float32Array(markerCount * 3);

    for (let i = 0; i < markerCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / markerCount);
      const theta = Math.sqrt(markerCount * Math.PI) * phi;
      const r = 1.015;
      markerPositions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      markerPositions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      markerPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    markerGeo.setAttribute('position', new THREE.BufferAttribute(markerPositions, 3));
    const markerMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.9,
    });
    const markers = new THREE.Points(markerGeo, markerMat);
    globeGroup.add(markers);

    // Outer Orbital Rings
    const ringGeo = new THREE.BufferGeometry();
    const ringPoints: number[] = [];
    for (let i = 0; i <= 80; i++) {
      const theta = (i / 80) * Math.PI * 2;
      ringPoints.push(Math.cos(theta) * 1.25, Math.sin(theta) * 1.25, 0);
    }
    ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(ringPoints, 3));
    const ringMat1 = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Line(ringGeo, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    ring1.rotation.y = Math.PI * 0.2;
    globeGroup.add(ring1);

    const ringMat2 = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.55,
    });
    const ring2 = new THREE.Line(ringGeo, ringMat2);
    ring2.rotation.x = -Math.PI * 0.3;
    ring2.rotation.y = -Math.PI * 0.35;
    globeGroup.add(ring2);

    // Realistic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const backRimLight = new THREE.DirectionalLight(0x00c2ff, 1.4);
    backRimLight.position.set(-5, -2, -3);
    scene.add(backRimLight);

    // Animation Loop
    let animationFrameId: number;
    let targetRotX = 0.1;
    let targetRotY = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth slow earth rotation
      globeGroup.rotation.y += 0.0025;
      ring1.rotation.z += 0.0018;
      ring2.rotation.z -= 0.0022;

      // Soft tilt based on mouse position
      globeGroup.rotation.x += (targetRotX - globeGroup.rotation.x) * 0.05;
      globeGroup.position.x += (targetRotY * 0.08 - globeGroup.position.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = nx * 0.3;
      targetRotX = 0.1 + ny * 0.2;
      setMousePos({ x: nx, y: ny });
    };

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[540px] lg:h-[620px] flex items-center justify-center select-none overflow-visible">
      {/* Soft atmospheric background glow */}
      <div className="absolute w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-blue-500/25 via-sky-400/25 to-purple-500/20 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute w-[380px] h-[380px] rounded-full bg-cyan-400/20 blur-2xl pointer-events-none -z-10" />

      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full max-w-[580px] max-h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing z-0" />

      {/* Bright Luminous Connecting Network SVG Lines (Interconnecting people with each other and the globe) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600" fill="none">
        <defs>
          {/* Intense bright cyan-blue gradient */}
          <linearGradient id="brightCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="1" />
          </linearGradient>

          {/* Electric violet-blue gradient */}
          <linearGradient id="brightVioletGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="1" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="1" />
          </linearGradient>

          {/* Strong High-Intensity Glow Filter */}
          <filter id="strongNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated pulse pattern along the lines */}
          <style>{`
            .network-flow-fast {
              stroke-dasharray: 8 12;
              animation: dashFlow 20s linear infinite;
            }
            .network-flow-reverse {
              stroke-dasharray: 6 10;
              animation: dashFlowRev 25s linear infinite;
            }
            @keyframes dashFlow {
              to { stroke-dashoffset: -1000; }
            }
            @keyframes dashFlowRev {
              to { stroke-dashoffset: 1000; }
            }
            .pulse-dot {
              animation: pulseGlow 2.5s ease-in-out infinite;
            }
            @keyframes pulseGlow {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.4); opacity: 1; }
            }
          `}</style>
        </defs>

        {/* 1. Bright Interconnecting Line: Card 1 (Top-Left 72,108) <-> Card 3 (Top-Right 516,108) across top */}
        <path
          d="M 110 120 Q 300 30 500 120"
          stroke="url(#brightCyanGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
          className="network-flow-fast"
        />

        {/* 2. Bright Interconnecting Line: Card 1 (Top-Left) <-> Card 2 (Mid-Left 60,330) */}
        <path
          d="M 90 140 Q 60 235 80 320"
          stroke="url(#brightCyanGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
        />

        {/* 3. Bright Interconnecting Line: Card 3 (Top-Right) <-> Card 4 (Mid-Right 528,324) */}
        <path
          d="M 505 135 Q 540 230 520 315"
          stroke="url(#brightVioletGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
        />

        {/* 4. Bright Interconnecting Line: Card 4 (Mid-Right) <-> Card 5 (Bottom-Right 504,492) */}
        <path
          d="M 520 345 Q 535 420 500 480"
          stroke="url(#brightCyanGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
        />

        {/* 5. Bright Interconnecting Line: Card 2 (Mid-Left) <-> Card 5 (Bottom-Right) Underneath Globe */}
        <path
          d="M 85 350 Q 280 570 485 490"
          stroke="url(#brightVioletGrad)"
          strokeWidth="2.2"
          filter="url(#strongNeonGlow)"
          className="network-flow-reverse"
        />

        {/* 6. Direct Luminous Ties connecting Cards into the Earth Core Hubs */}
        <path
          d="M 110 120 Q 210 200 290 280"
          stroke="url(#brightCyanGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
          className="network-flow-fast"
        />
        <path
          d="M 85 330 Q 185 320 290 290"
          stroke="url(#brightCyanGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
        />
        <path
          d="M 500 120 Q 400 190 310 280"
          stroke="url(#brightVioletGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
          className="network-flow-fast"
        />
        <path
          d="M 515 325 Q 410 320 310 290"
          stroke="url(#brightCyanGrad)"
          strokeWidth="2.5"
          filter="url(#strongNeonGlow)"
        />
        <path
          d="M 485 480 Q 380 400 300 310"
          stroke="url(#brightVioletGrad)"
          strokeWidth="2.2"
          filter="url(#strongNeonGlow)"
        />

        {/* Glowing Data Nodes at Intersection Points */}
        <g transform="translate(190, 170)">
          <circle r="14" fill="#0284C7" fillOpacity="0.25" filter="url(#strongNeonGlow)" />
          <circle r="7" fill="#00F0FF" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#strongNeonGlow)" />
        </g>
        <g transform="translate(415, 175)">
          <circle r="14" fill="#A855F7" fillOpacity="0.25" filter="url(#strongNeonGlow)" />
          <circle r="7" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#strongNeonGlow)" />
        </g>
        <g transform="translate(180, 325)">
          <circle r="12" fill="#0284C7" fillOpacity="0.25" filter="url(#strongNeonGlow)" />
          <circle r="6" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#strongNeonGlow)" />
        </g>
        <g transform="translate(420, 320)">
          <circle r="12" fill="#00F0FF" fillOpacity="0.25" filter="url(#strongNeonGlow)" />
          <circle r="6" fill="#00F0FF" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#strongNeonGlow)" />
        </g>
        <g transform="translate(300, 290)">
          <circle r="18" fill="#38BDF8" fillOpacity="0.2" filter="url(#strongNeonGlow)" />
          <circle r="8" fill="#00F0FF" stroke="#FFFFFF" strokeWidth="2" filter="url(#strongNeonGlow)" />
        </g>
        <g transform="translate(290, 520)">
          <circle r="12" fill="#A855F7" fillOpacity="0.25" filter="url(#strongNeonGlow)" />
          <circle r="6" fill="#C084FC" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#strongNeonGlow)" />
        </g>
      </svg>

      {/* Floating Connected Employee Cards */}
      {profileNodes.map((node) => {
        const offsetX = mousePos.x * 12 * node.depth;
        const offsetY = mousePos.y * 12 * node.depth;

        return (
          <div
            key={node.id}
            style={{
              left: `${node.xPercent}%`,
              top: `${node.yPercent}%`,
              transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
              transition: 'transform 0.2s ease-out',
            }}
            className="absolute z-20 group cursor-pointer"
          >
            {/* Bright neon card frame */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-500 backdrop-blur-md shadow-[0_0_24px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-105 transition-all duration-300">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-900 border border-white/30">
                <img
                  src={node.avatar}
                  alt={node.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                {/* Active status indicator dot */}
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white shadow-[0_0_10px_#34d399]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
