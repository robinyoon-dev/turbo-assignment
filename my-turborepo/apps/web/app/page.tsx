"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/photos");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.headerText}>지원자분 성함을 적어주세요</p>
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.greeting}>안녕하세요</h1>
          <h1 className={styles.name}>&#123;지원자 이름&#125;입니다.</h1>
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
