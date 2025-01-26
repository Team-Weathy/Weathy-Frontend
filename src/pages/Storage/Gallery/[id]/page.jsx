import { useNavigate, useParams } from "react-router-dom";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import { useEffect, useState } from "react";
import { getPhoto } from "@/api/photos";

export const GalleryDetailPage = () => {
  const navigate = useNavigate();
  const { id: photoId } = useParams();
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const handleGetPhoto = async () => {
      try {
        const response = await getPhoto(photoId);
        setPhoto(response.data.photo_url);
      } catch (error) {
        console.error(error);
      }
    };

    handleGetPhoto();
  }, [photoId]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = photo;
    link.download = "MyPhoto.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex h-real-screen flex-col justify-between bg-white pb-[120px] pt-[56px]">
      <button onClick={() => navigate(-1)}>
        <img src={LeftArrow} alt="뒤로가기" className="mb-[20px] px-[10px]" />
      </button>
      <img src={photo} className="max-h-[450px] max-w-[350px] self-center" />
      <div className="Label_M text-center" onClick={handleDownload}>
        저장하기
      </div>
    </div>
  );
};
