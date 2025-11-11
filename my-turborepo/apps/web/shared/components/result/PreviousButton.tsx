"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export function PreviousButton() {
  const router = useRouter();

  const handlePrev = () => {
    router.push("/");
  };

  return <Button onClick={handlePrev}>이전</Button>;
}
