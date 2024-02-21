"use client";
import { useEffect, useState } from "react";

export default function FontSizeControler({ titleClass, textClass }) {
  //   const [textSize, setTextSize] = useState(1.125);
  //   const [titleSize, setTitleSize] = useState(1.5);
  //   const [textLine, setTextLine] = useState(1.75);

  let textSize = 1.125;
  let titleSize = 1.5;
  let textLine = 1.75;

  return (
    <div
      className={`z-100 bg-white dark:bg-black h-12 flex justify-center items-center`}
    >
      <button
        className="mr-4 text-lg font-bold"
        title="Zmenšit text"
        onClick={() => {
          titleSize -= 0.25;
          textSize -= 0.25;
          textLine -= 0.25;
          const titles = document.querySelectorAll(`.${titleClass}`);
          const texts = document.querySelectorAll(`.${textClass}`);

          titles.forEach((title) => {
            title.style.fontSize = `${titleSize}rem`;
          });
          texts.forEach((text) => {
            text.style.fontSize = `${textSize}rem`;
            text.style.lineHeight = `${textLine}rem`;
          });
        }}
      >
        A-
      </button>
      <button
        className="ml-4 text-2xl font-bold"
        title="Zvětšit text"
        onClick={() => {
          titleSize += 0.25;
          textSize += 0.25;
          textLine += 0.25;

          const titles = document.querySelectorAll(`.${titleClass}`);
          const texts = document.querySelectorAll(`.${textClass}`);

          titles.forEach((title) => {
            title.style.fontSize = `${titleSize}rem`;
          });
          texts.forEach((text) => {
            text.style.fontSize = `${textSize}rem`;
            text.style.lineHeight = `${textLine}rem`;
          });
        }}
      >
        A+
      </button>
    </div>
  );
}
