import Head from 'next/head'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Ground } from '@/components/Ground';
import { Car } from '@/components/Car';
import { Rings } from '@/components/Rings';
import { FloatingGrid } from '@/components/FloatingGrid';
import { Boxes } from '@/components/Boxes';

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, .35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={15.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={15}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <Boxes />
      <Car />
      <Rings />
      <FloatingGrid />
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Car</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={null}>
        <Canvas shadows={true} style={{ height: '100vh' }}>
          <CarShow />
        </Canvas>
      </Suspense>
    </>
  )
}
