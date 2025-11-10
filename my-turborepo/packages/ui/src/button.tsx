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
    <button
      type={type}
      className={`bg-[#111111] text-white border-none rounded-xl p-[12px] text-base font-medium cursor-pointer transition-all w-full max-w-[320px] min-h-[50px] hover:bg-[#111111]/80 active:bg-[#111111]/80 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-[400px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
