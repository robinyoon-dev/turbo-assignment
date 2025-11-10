"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { NAME } from "../lib/constants/info";
import { Header } from "./components/Header";

export default function Home() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/photos");
  };

  return (
    <div className={styles.container}>
      <Header text={NAME} />

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.greeting}>안녕하세요</h1>
          <h1 className={styles.name}>{NAME}입니다.</h1>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.button} onClick={handleNext}>
          다음
        </button>
      </div>
    </div>
  );
}
