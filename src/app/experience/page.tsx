"use client";

import WebcamFeed from "./components/WebCamFeed";

const ExperiencePage: React.FC = () => {
  return (
    <div className="h-svh w-svw bg-green-400 p-4">
      <WebcamFeed />
      {/* <div className="relative mx-auto h-[480px] w-[640px]">

        <WebcamFeed onFaceDetected={setFaceResults} />

        <div className="absolute left-0 top-0 h-[480px] w-[640px]">
          <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
            <ambientLight intensity={0.5} />
            {faceResults && (
              <Suspense fallback={null}>
                <FaceMeshComponent faceLandmarkerResult={faceResults} />
              </Suspense>
            )}
          </Canvas>
        </div>
      </div> */}
    </div>
  );
};

export default ExperiencePage;
