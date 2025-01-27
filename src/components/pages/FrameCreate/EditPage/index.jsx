import { useStickerStore } from "@/libraries/store/storesticker";
import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import {
  BasicFrame1,
  BasicFrame2,
  BasicFrame3,
  BasicFrame4,
} from "@/components/common/BasicFrame";

const EditPage = () => {
  const stickers = useStickerStore((state) => state.stickers);
  const updateSticker = useStickerStore((state) => state.updateSticker);
  const removeSticker = useStickerStore((state) => state.removeSticker);
  //const [width, setWidth] = useState(0);
  //const [height, setHeight] = useState(0);
  const frameRef = useRef(null);
  const [selectedsticker, setSelectedSticker] = useState(null);

  useEffect(() => {
    console.log(selectedsticker);
  }, [stickers]);

  const renderFrame = () => {
    switch (localStorage.getItem("basicFrameId")) {
      case "1":
        return <BasicFrame1 bgsrc={localStorage.getItem("frameBg")} />;
      case "2":
        return <BasicFrame2 bgsrc={localStorage.getItem("frameBg")} />;
      case "3":
        return <BasicFrame3 bgsrc={localStorage.getItem("frameBg")} />;
      case "4":
        return <BasicFrame4 bgsrc={localStorage.getItem("frameBg")} />;
      default:
        return null;
    }
  };

  const handlesetSticker = (stickerindex) => {
    setSelectedSticker(stickerindex);
  };
  const handleDrag = (e, d, index) => {
    updateSticker(index, {
      position: { x: d.x, y: d.y },
    });
  };

  const handleResizeStop = (index, e, direction, ref, delta, position) => {
    updateSticker(index, {
      ...stickers[index],
      size: {
        width: ref.style.width,
        height: ref.style.height,
      },
      ...position,
    });
  };

  const handleremover = (e, index) => {
    //e.preventDefault();
    removeSticker(index);
  };

  return (
    <div>
      <div className="flex flex-1 items-center justify-center">
        <div ref={frameRef}>{renderFrame()}</div>
      </div>
      {console.log(stickers)}
      {stickers.map((sticker, index) => (
        <Rnd
          key={index}
          //maxHeight={}
          //maxWidth={width}
          default={{
            x: sticker.position.x,
            y: sticker.position.y,
            width: 70,
            height: 70,
          }}
          onDragStop={(e, d) => {
            handleDrag(e, d, index);
            handlesetSticker(index);
          }}
          //dragHandleClassName="handle"
          onResizeStop={(e, direction, ref, delta, position) =>
            handleResizeStop(index, e, direction, ref, delta, position)
          }
        >
          <img src={sticker.src} alt="" />
        </Rnd>
      ))}
      {/* <button onClick={handleremover}>삭제</button> */}
    </div>
  );
};

export default EditPage;
