export const BasicFrame1 = ({ bgsrc }) => {
  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[420px] w-[180px] flex-col gap-[5px] border-2 px-[19px] py-[21px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="flex-1 border-2 bg-white"></div>
      <div className="flex-1 border-2 bg-white"></div>
      <div className="flex-1 border-2 bg-white"></div>
      <div className="flex-1 border-2 bg-white"></div>
    </div>
  );
};

export const BasicFrame2 = ({ bgsrc }) => {
  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[390px] w-[320px] flex-col gap-[4px] border-2 px-[10px] py-[26px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="flex flex-1 gap-[8px]">
        <div className="flex-1">
          <div
            className={`border-2 border-${bgsrc} h-full flex-1 bg-white`}
          ></div>
        </div>
        <div className="flex-1">
          <div
            className={`border-2 border-${bgsrc} mt-[26px] h-full flex-1 bg-white`}
          ></div>
        </div>
      </div>
      <div className="mb-[26px] flex flex-1 gap-[8px]">
        <div className="flex-1">
          <div
            className={`border-2 border-${bgsrc} h-full flex-1 bg-white`}
          ></div>
        </div>
        <div className="flex-1">
          <div
            className={`border-2 border-${bgsrc} mt-[26px] h-full flex-1 bg-white`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const BasicFrame3 = ({ bgsrc }) => {
  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[270px] w-[350px] flex-col gap-[5px] border-2 px-[23px] py-[17px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="flex flex-1 gap-[5px]">
        <div className={`border-2 border-${bgsrc} flex-1 bg-white`}></div>
        <div className={`border-2 border-${bgsrc} flex-1 bg-white`}></div>
      </div>
      <div className="flex flex-1 gap-[5px]">
        <div className={`border-2 border-${bgsrc} flex-1 bg-white`}></div>
        <div className={`border-2 border-${bgsrc} flex-1 bg-white`}></div>
      </div>
    </div>
  );
};

export const BasicFrame4 = ({ bgsrc }) => {
  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[270px] w-[350px] flex-col gap-[10px] border-2 px-[23px] py-[17px] shadow-lg ${
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
        <div className="flex-1 border-2 bg-white"></div>
        <div className="flex-1 border-2 bg-white"></div>
      </div>
      <div className="mr-[19px] flex flex-1 gap-[4px]">
        <div className="flex-1 border-2 bg-white"></div>
        <div className="flex-1 border-2 bg-white"></div>
      </div>
    </div>
  );
};
