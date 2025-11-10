interface HeaderProps {
  text: string;
  variant?: "light" | "gray";
}

export function Header({ text, variant = "light" }: HeaderProps) {
  return (
    <div
      className={`px-6 py-6 text-center md:px-8 md:py-8 ${
        variant === "gray" ? "bg-gray-400" : ""
      }`}
    >
      <p
        className={`text-sm font-normal md:text-base lg:text-lg ${
          variant === "gray" ? "text-gray-700" : "text-gray-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
