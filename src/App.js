
import './App.css';
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const Sphere360 = ({ imageUrl }) => {
  const texture = useTexture(imageUrl)

  return (
    <Sphere args={[5, 64, 64]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </Sphere>
  )
}

function App() {

  const imageList = [
    'assets/360images/1.jpeg',
    'assets/360images/2.jpeg',
    'assets/360images/3.jpeg',
  ]

 const [currentImage, setCurrentImage] = useState(imageList[0])

  return (
    <>
      {/* <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        {imageList.map((img, idx) => (
          <button key={idx} onClick={() => setCurrentImage(img)} style={{ marginRight: 8 }}>
            Scene {idx + 1}
          </button>
        ))}
      </div> */}

      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <Suspense fallback={null}>
          <Sphere360 imageUrl={currentImage} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App;
