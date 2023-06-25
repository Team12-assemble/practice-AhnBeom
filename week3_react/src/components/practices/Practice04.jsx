import React, { useEffect, useRef, useState } from "react";
import styles from "./Practice04.module.css";
import img01 from "../../images/01.webp";
import img02 from "../../images/02.webp";
import img03 from "../../images/03.webp";
import img04 from "../../images/04.webp";
import img05 from "../../images/05.webp";
const imgs = [img01, img02, img03, img04, img05];

const Slider = ({ imgs }) => {
  const [index, setIndex] = useState(1);
  const timeoutRef = useRef(null);
  const total = imgs.length;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === total ? 1 : prevIndex + 1));
    }, 2500);

    return () => {
      resetTimeout();
    };
  }, [index, total]);

  return (
    <div className={styles.container}>
      {/* 슬라이더 */}
      <div
        className={styles.slider}
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${(100 / total) * (index - 1)}%`,
        }}
      >
        {imgs.map((img, i) => {
          return (
            <img
              alt="이미지"
              key={i}
              src={img}
              style={{
                width: `${100 / total}%`,
              }}
            />
          );
        })}
      </div>
      <nav>
        {Array(total)
          .fill()
          .map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i + 1)}
              className={index === i + 1 ? styles.current : ""}
            />
          ))}
      </nav>
    </div>
  );
};

export default function ImageSlider() {
  return <Slider imgs={imgs} />;
}
