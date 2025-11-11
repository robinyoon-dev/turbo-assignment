import { Suspense } from "react";
import MainComponent from "./MainComponent";
import { getPhoto } from "../../api/photo/photo.api";

export default async function Result() {

  const photoData = await getPhoto('0');

  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl text-white font-medium">로딩 중...</div>
        </div>
      }
    >
      <MainComponent photoData={photoData}/>
    </Suspense>
  );
}
