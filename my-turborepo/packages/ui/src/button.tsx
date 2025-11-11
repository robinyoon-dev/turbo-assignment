"use client";

import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  
  return (
    // 335, 48
  
    <button
      type={type}
      className={`btn bg-[#111111] text-white border-none rounded-xl p-[12px] text-base font-medium cursor-pointer transition-all w-full max-w-[335px] min-h-[48px] hover:opacity-80 active:opacity-80" ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
