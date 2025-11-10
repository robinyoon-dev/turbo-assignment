"use client";

import { useRouter } from "next/navigation";
import { NAME } from "../lib/constants/info";
import { Header } from "./components/Header";

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
        <button
          className="bg-zinc-900 text-white border-none rounded-xl px-8 py-4 text-base font-medium cursor-pointer transition-all w-full max-w-[320px] min-h-[50px] hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 md:max-w-[400px] md:px-12 md:py-5 md:text-lg lg:max-w-[450px] lg:px-16 lg:py-6 lg:text-xl lg:min-h-[60px]"
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
