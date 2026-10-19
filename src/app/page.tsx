"use client";
import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const Page = () => {
  const webcamRef = useRef(null);
  let [url, setUrl] = useState("");
  const videoConstraints = {
    width: 540,
    height: 720,
    facingMode: "environment",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const refresh = () => {
    setUrl("");
  };

  return (
    <>
      <h1 className="bg-gray-100 text-black font-bold text-center py-2">
        Camera App
      </h1>

      <div className="container mx-auto">
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          imageSmoothing={true}
          mirrored={true}
          screenshotQuality={1}
          className="mx-auto block mt-5 rounded border-4 border-gray-300 shadow-lg"
        />

        <div className="flex justify-center gap-3">
          <button
            onClick={capture}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded"
          >
            capture
          </button>
          <button
            onClick={refresh}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded"
          >
            refresh
          </button>
        </div>
      </div>

      {url && (
        <div className="container mx-auto mt-5 flex flex-col items-center">
          <img src={url} alt="photo" className="mx-auto block" />
          <a
            href={url}
            download="captured-image.jpg"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded"
          >
            download
          </a>
        </div>
      )}
    </>
  );
};

export default Page;
