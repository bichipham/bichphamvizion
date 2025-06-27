import "./App.css";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

const Sphere360 = ({ imageUrl }) => {
  const texture = useTexture(imageUrl);

  return (
    <Sphere args={[5, 64, 64]}>
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </Sphere>
  );
};

function App() {
  const imageList = [
    {url: "assets/360images/1.jpeg", toIndex: 1},
    {url: "assets/360images/2.jpeg", toIndex: 2},
    {url: "assets/360images/3.jpeg", toIndex: 3},
    {url: "assets/360images/4.jpeg", toIndex: 0}
  ];

  const [currentImage, setCurrentImage] = useState(imageList[0]);

  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          <Sphere360 imageUrl={currentImage?.url} />
          <OrbitControls enableZoom={false} />
        </Suspense>
        <Html position={[1,-2,1]} transform occlude>
          <img
            onClick={() => setCurrentImage(imageList[currentImage?.toIndex])}
            src="/assets/footstep.png"
            alt="Logo"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "12px",
              transform: "rotateX(60deg)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          />
        </Html>
      </Canvas>
      <a href="https://sample.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/logo/logo.png" alt="Logo" className="fixed-logo" />
      </a>
    </>
  );
}

export default App;
