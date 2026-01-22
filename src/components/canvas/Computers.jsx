import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';


const Computers = ( { isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf') // model

  return(
    <mesh>
      <hemisphereLight intensity={1.65} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow  
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.22 : 0.6}
        position={isMobile ? [0, -0.5, -0.37] : [-0.5, -2.3, -1.2]}
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(() => 
    window.matchMedia('(max-width: 500px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
    
  }, []);
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      shadows={false}
      camera={{ position: [12, 3, 6], fov: 32 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        { /* Move model left to right */ }
        <OrbitControls 
        enableZoom={false} 
        /* We can only rotate it at the specific angle */ 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        /> 
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas
