"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../components/Header";
import { NAME } from "../../lib/constants/info";

interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default function Photos() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoading(false);
      });
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      router.push("/");
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  const currentPhoto = photos[currentIndex];

  if (!currentPhoto) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>사진을 불러올 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header text={NAME} variant="gray" />

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={`${currentPhoto.download_url}?w=1200&h=800`}
              alt={`Photo by ${currentPhoto.author}`}
              width={1200}
              height={800}
              className={styles.photo}
              priority
            />
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>id</div>
                <div className={styles.infoValue}>{currentPhoto.id}</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>author</div>
                <div className={styles.infoValue}>{currentPhoto.author}</div>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>width</div>
                <div className={styles.infoValue}>
                  {currentPhoto.width.toLocaleString()}
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>height</div>
                <div className={styles.infoValue}>
                  {currentPhoto.height.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>url</div>
              <a
                href={currentPhoto.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                {currentPhoto.url}
              </a>
            </div>

            <div className={styles.infoColumn}>
              <div className={styles.infoLabel}>download_url</div>
              <a
                href={currentPhoto.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                {currentPhoto.download_url}
              </a>
            </div>
          </div>

          <button className={styles.button} onClick={handlePrev}>
            이전
          </button>
        </div>
      </div>
    </div>
  );
}
