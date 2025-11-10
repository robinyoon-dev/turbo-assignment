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
      className={`bg-[#111111] text-white border-none rounded-xl px-8 py-4 text-base font-medium cursor-pointer transition-all w-full max-w-[320px] min-h-[50px] hover:bg-[#111111]/80 active:bg-[#111111]/80 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-[400px] md:px-12 md:py-5 md:text-lg lg:max-w-[450px] lg:px-16 lg:py-6 lg:text-xl lg:min-h-[60px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
