"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="text-center w-full max-w-2xl">
          <h1 className="text-[5rem] font-bold text-zinc-900 mb-4 md:text-[7rem] lg:text-[9rem]">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-black mb-3 md:text-3xl lg:text-4xl">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-base text-gray-600 mb-8 md:text-lg lg:text-xl">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center py-8 md:py-12">
        <Button onClick={handleGoHome}>홈으로 돌아가기</Button>
      </div>
    </div>
  );
}

