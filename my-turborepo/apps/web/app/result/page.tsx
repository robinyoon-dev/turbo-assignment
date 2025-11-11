import { Suspense } from "react";
import MainComponent from "./MainComponent";
import { getPhoto } from "../../api/photo/photo.api";
import MainSkeleton from "../../shared/components/result/MainSkeleton";

export default async function Result() {

  const photoData = await getPhoto('0');

  return (
    <Suspense fallback={<MainSkeleton />}>
      <MainComponent photoData={photoData}/>
    </Suspense>
  );
}
