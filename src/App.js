import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import CameraControls from './components/CameraControls';
import Loading from './components/Loading';
import ArWing from './components/ArWing';

function App() {
  return (
    <>
      <Canvas style={{ background: 'white' }}>
        <CameraControls />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loading />}>
          <ArWing />
        </Suspense>
      </Canvas>
      <a
        href='https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/'
        className='blog-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        Blog Post
      </a>
    </>
  );
}

export default App;
