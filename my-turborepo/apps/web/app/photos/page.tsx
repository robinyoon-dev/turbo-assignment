"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "../components/Header";
import { NAME } from "../../lib/constants/info";
import { Button } from "@repo/ui/button";

interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default function Photos() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoading(false);
      });
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      router.push("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="text-2xl text-white font-medium">로딩 중...</div>
      </div>
    );
  }

  const currentPhoto = photos[currentIndex];

  if (!currentPhoto) {
    return (
      <div className="min-h-screen bg-gray-400 flex items-center justify-center">
        <div className="text-2xl text-white font-medium">
          사진을 불러올 수 없습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col">
      <Header text={NAME} variant="gray" />

      <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6 max-w-[1600px] mx-auto w-full md:p-8 md:gap-8 lg:p-12 lg:gap-10 lg:items-start xl:gap-12">
        {/* Image Section */}
        <div className="w-full lg:flex-1 lg:max-w-[600px] xl:max-w-[700px]">
          <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-black shadow-md md:aspect-video md:rounded-3xl lg:aspect-[4/3]">
            <Image
              src={`${currentPhoto.download_url}?w=1200&h=800`}
              alt={`Photo by ${currentPhoto.author}`}
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full lg:flex-1 lg:max-w-[600px] xl:max-w-[700px] flex flex-col gap-4">
          {/* ID and Author Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-black md:text-base">
                  id
                </div>
                <div className="text-base text-gray-500 font-normal md:text-lg">
                  {currentPhoto.id}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-black md:text-base">
                  author
                </div>
                <div className="text-base text-gray-500 font-normal md:text-lg">
                  {currentPhoto.author}
                </div>
              </div>
            </div>
          </div>

          {/* Width and Height Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-black md:text-base">
                  width
                </div>
                <div className="text-base text-gray-500 font-normal md:text-lg">
                  {currentPhoto.width.toLocaleString()}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-black md:text-base">
                  height
                </div>
                <div className="text-base text-gray-500 font-normal md:text-lg">
                  {currentPhoto.height.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* URLs Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm md:p-8 md:rounded-[20px]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 mb-4">
                <div className="text-sm font-semibold text-black md:text-base">
                  url
                </div>
                <a
                  href={currentPhoto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 break-all underline font-normal hover:text-zinc-900 md:text-base"
                >
                  {currentPhoto.url}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-semibold text-black md:text-base">
                  download_url
                </div>
                <a
                  href={currentPhoto.download_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 break-all underline font-normal hover:text-zinc-900 md:text-base"
                >
                  {currentPhoto.download_url}
                </a>
              </div>
            </div>
          </div>

          {/* Previous Button */}
          <Button onClick={handlePrev} className="lg:max-w-[200px] lg:ml-auto">
            이전
          </Button>
        </div>
      </div>
    </div>
  );
}
