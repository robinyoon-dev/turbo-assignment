import styles from "./Header.module.css";

interface HeaderProps {
  text: string;
  variant?: "light" | "gray";
}

export function Header({ text, variant = "light" }: HeaderProps) {
  return (
    <div className={`${styles.header} ${variant === "gray" ? styles.gray : ""}`}>
      <p className={styles.headerText}>{text}</p>
    </div>
  );
}

