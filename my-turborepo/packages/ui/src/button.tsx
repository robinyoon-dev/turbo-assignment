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
      className={`bg-[#111111] text-white border-none rounded-xl p-[12px] text-base font-medium cursor-pointer transition-all w-full max-w-[335px] min-h-[48px] hover:bg-[#111111]/80 active:bg-[#111111]/80 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
