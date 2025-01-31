import { useCameraFrames } from "@/hooks";
import { useEffect } from "react";

export const BasicCameraFrame1 = ({
  bgsrc,
  isCapturing,
  currentFrame,
  stickers,
}) => {
  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  return (
    <div
      className={`relative flex h-[420px] w-[180px] flex-col gap-[5px] px-[17px] py-[21px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      {[0, 1, 2, 3].map((index) => (
        <div className="relative flex h-[90px] w-[144px] bg-white" key={index}>
          {frames[index] ? (
            <img
              src={frames[index]}
              alt={`Frame ${index + 1}`}
              className="h-full w-full object-cover"
              style={{ transform: "scaleX(-1)" }}
            />
          ) : (
            <video
              ref={videoRefs.current[index]}
              autoPlay
              playsInline
              className="h-full w-full object-cover"
              style={{ transform: "scaleX(-1)" }}
            ></video>
          )}
          <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
        </div>
      ))}
      {stickers?.map((sticker, stickerIndex) => (
        <img
          key={stickerIndex}
          src={sticker.stickerUrl}
          alt="sticker"
          className="absolute"
          style={{
            left: `${sticker.positionX}px`,
            top: `${sticker.positionY}px`,
            width: `${sticker.stickerWidth}px`,
            height: `${sticker.stickerHeight}px`,
          }}
        />
      ))}
    </div>
  );
};

export const BasicCameraFrame2 = ({
  bgsrc,
  isCapturing,
  currentFrame,
  stickers,
}) => {
  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`relative flex h-[425px] w-[320px] flex-col gap-[4px] px-[13px] py-[26px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="flex gap-[8px]">
        <div className="h-[140px] w-[140px]">
          <div
            className={`relative h-full bg-white ${
              isCapturing && currentFrame === 0 ? "border-blue-500" : ""
            }`}
          >
            {frames[0] ? (
              <img
                src={frames[0]}
                alt="Frame 1"
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[0]}
                autoPlay
                playsInline
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[0]} className="hidden"></canvas>
          </div>
        </div>
        <div className="h-[140px] w-[140px]">
          <div
            className={`relative mt-[26px] h-full bg-white ${
              isCapturing && currentFrame === 1 ? "border-blue-500" : ""
            }`}
          >
            {frames[1] ? (
              <img
                src={frames[1]}
                alt="Frame 2"
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[1]}
                autoPlay
                playsInline
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[1]} className="hidden"></canvas>
          </div>
        </div>
      </div>
      <div className="mt-[26px] flex gap-[8px]">
        <div className="h-[140px] w-[140px]">
          <div
            className={`relative h-full bg-white ${
              isCapturing && currentFrame === 2 ? "border-blue-500" : ""
            }`}
          >
            {frames[2] ? (
              <img
                src={frames[2]}
                alt="Frame 3"
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[2]}
                autoPlay
                playsInline
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[2]} className="hidden"></canvas>
          </div>
        </div>
        <div className="h-[140px] w-[140px]">
          <div
            className={`relative mt-[26px] h-full bg-white ${
              isCapturing && currentFrame === 3 ? "border-blue-500" : ""
            }`}
          >
            {frames[3] ? (
              <img
                src={frames[3]}
                alt="Frame 4"
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[3]}
                autoPlay
                playsInline
                className="h-[165px] w-[140px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[3]} className="hidden"></canvas>
          </div>
        </div>
      </div>
      {stickers?.map((sticker, stickerIndex) => (
        <img
          key={stickerIndex}
          src={sticker.stickerUrl}
          alt="sticker"
          className="absolute"
          style={{
            left: `${sticker.positionX}px`,
            top: `${sticker.positionY}px`,
            width: `${sticker.stickerWidth}px`,
            height: `${sticker.stickerHeight}px`,
          }}
        />
      ))}
    </div>
  );
};

export const BasicCameraFrame3 = ({
  bgsrc,
  isCapturing,
  currentFrame,
  stickers,
}) => {
  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`relative flex h-[273px] w-[350px] flex-col gap-[5px] px-[23px] py-[17px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="relative flex flex-1 gap-[5px]">
        {[0, 1].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[119px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[119px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
      <div className="relative flex flex-1 gap-[5px]">
        {[2, 3].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[119px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[119px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
      {stickers?.map((sticker, stickerIndex) => (
        <img
          key={stickerIndex}
          src={sticker.stickerUrl}
          alt="sticker"
          className="absolute"
          style={{
            left: `${sticker.positionX}px `,
            top: `${sticker.positionY}px`,
            width: `${sticker.stickerWidth}px`,
            height: `${sticker.stickerHeight}px`,
          }}
        />
      ))}
    </div>
  );
};

export const BasicCameraFrame4 = ({
  bgsrc,
  isCapturing,
  currentFrame,
  stickers,
}) => {
  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`relative flex h-[270px] w-[350px] flex-col gap-[8px] px-[23px] py-[17px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="ml-[19px] flex flex-1 gap-[4px]">
        {[0, 1].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[115px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[115px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
      <div className="mr-[19px] flex flex-1 gap-[4px]">
        {[2, 3].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[115px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[115px] w-[170px] object-cover"
                style={{ transform: "scaleX(-1)" }}
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
      {stickers?.map((sticker, stickerIndex) => (
        <img
          key={stickerIndex}
          src={sticker.stickerUrl}
          alt="sticker"
          className="absolute"
          style={{
            left: `${sticker.positionX}px`,
            top: `${sticker.positionY}px`,
            width: `${sticker.stickerWidth}px`,
            height: `${sticker.stickerHeight}px`,
          }}
        />
      ))}
    </div>
  );
};
