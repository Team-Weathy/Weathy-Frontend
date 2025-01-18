import { StorageImages } from "@/components/pages/Storage/StorageImages";
import { StorageLayout } from "@/components/pages/Storage/StorageLayout";
import frame1 from "@/assets/images/frame1.png";

const dummyData = [
  {
    date: "2025.01.16",
    frames: [
      {
        customFrameId: 1,
        customFrameTitle: "프론트 화이팅",
        customFrameUrl: frame1,
      },
      {
        customFrameId: 2,
        customFrameTitle: "지브리 st",
        customFrameUrl: frame1,
      },
      {
        customFrameId: 3,
        customFrameTitle: "백엔드 화이팅",
        customFrameUrl: frame1,
      },
    ],
  },
  {
    date: "2025.01.15",
    frames: [
      {
        customFrameId: 4,
        customFrameTitle: "졸리다",
        customFrameUrl: frame1,
      },
      {
        customFrameId: 5,
        customFrameTitle: "자고싶다",
        customFrameUrl: frame1,
      },
    ],
  },
];

export const MyFramePage = () => {
  return (
    <>
      <StorageLayout title="내가 만든 프레임">
        <div className="flex flex-col gap-[21px]">
          {dummyData.map((group) => (
            <StorageImages
              key={group.date}
              date={group.date}
              frames={group.frames}
            />
          ))}
        </div>
      </StorageLayout>
    </>
  );
};
