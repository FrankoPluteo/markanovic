"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import styles from "./ProjectGallery.module.css";

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const imgs = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  if (imgs.length === 0) return null;
  const hasMany = imgs.length > 1;

  function prev() {
    setIndex((i) => (i - 1 + imgs.length) % imgs.length);
  }
  
  function next() {
    setIndex((i) => (i + 1) % imgs.length);
  }

  // Handle touch swipe for mobile
  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next(); // Swipe left
    } else if (distance < -minSwipeDistance) {
      prev(); // Swipe right
    }

    setTouchStart(0);
    setTouchEnd(0);
  }

  // Keyboard navigation
  useEffect(() => {
    if (!hasMany) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMany]);

  return (
    <div className={styles.gallery}>
      <div 
        className={styles.frame}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={imgs[index]}
          alt={`${title} — ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
          quality={92}
          style={{ objectFit: "cover" }}
          priority={index === 0}
        />

        {hasMany && (
          <>
            <button className={styles.prev} onClick={prev} aria-label="Previous image">‹</button>
            <button className={styles.next} onClick={next} aria-label="Next image">›</button>
          </>
        )}
      </div>

      {hasMany && (
        <div className={styles.dots}>
          {imgs.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}