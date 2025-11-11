"use server";

import PhotoImage from "../../shared/components/result/PhotoImage";
import PhotoInfo from "../../shared/components/result/PhotoInfo";
import { Photo } from "../../shared/types/photo";

const MainComponent = async ({ photoData }: { photoData: Photo | null }) => {
  if (!photoData) {
    return (
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="text-2xl text-white font-medium">
          사진을 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6 max-w-[1600px] mx-auto w-full md:p-8 md:gap-8 lg:p-12 lg:gap-10 lg:items-start xl:gap-12">
      <PhotoImage photo={photoData} />
      <PhotoInfo photo={photoData} />
    </div>
  );
};

export default MainComponent;
