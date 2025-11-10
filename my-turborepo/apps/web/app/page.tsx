"use client";

import { useRouter } from "next/navigation";
import { NAME } from "../shared/constants/info";
import { Header } from "../shared/components/Header";
import { Button } from "@repo/ui/button";

export default function Home() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/photos");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12">
      <Header text={NAME} />

      <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center w-full">
          <h1 className="text-[1.75rem] font-normal mb-2 text-black leading-normal md:text-4xl lg:text-5xl xl:text-5xl">
            안녕하세요
          </h1>
          <h1 className="text-[1.75rem] font-bold text-black leading-normal md:text-4xl lg:text-5xl xl:text-5xl">
            {NAME}입니다.
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center py-8 md:py-12 lg:py-16">
        <Button onClick={handleNext}>다음</Button>
      </div>
    </div>
  );
}
