import React, { useState } from "react";
import ColorCodeModeSelection from "./TailwindCSS_TestLab/ColorCode_ModeSelection/ColorCodeModeSelection";

interface TailwindCSS_DisplayTestProps {
  droppedIds: string[];
}

type ColorMode = "hex" | "rgba" | "tailwind";

const TailwindCSS_DisplayTest: React.FC<TailwindCSS_DisplayTestProps> = ({
  droppedIds,
}) => {
  const [isDark, setIsDark] = useState(false);
  const [colorMode, setColorMode] = useState<ColorMode>("hex");

  // Hex
  const [lightColorCode, setLightColorCode] = useState("#fff");
  const [darkColorCode, setDarkColorCode] = useState("#000");
  // RGBA
  const [lightRgba, setLightRgba] = useState("255,255,255,1");
  const [darkRgba, setDarkRgba] = useState("0,0,0,1");
  // Tailwind
  const [lightTailwind, setLightTailwind] = useState("bg-orange-200");
  const [darkTailwind, setDarkTailwind] = useState("bg-gray-900");
  // 共用
  const [customOpacity, setCustomOpacity] = useState(80);

  // HEX + opacity 處理
  function hexWithOpacity(hex: string, opacity: number) {
    let c = hex.replace("#", "");
    if (c.length === 3)
      c = c
        .split("")
        .map((x) => x + x)
        .join("");
    if (c.length !== 6) return hex;
    const alpha = Math.round((opacity / 100) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${c}${alpha}`;
  }

  // RGBA 處理
  function rgbaString(rgba: string, opacity: number) {
    const [r, g, b, a = 1] = rgba.split(",").map(Number);
    return `rgba(${r},${g},${b},${(a * opacity) / 100})`;
  }

  // 依模式決定 style/class
  let bgStyle: React.CSSProperties = {};
  let bgClass = "";
  if (colorMode === "hex") {
    bgStyle.backgroundColor = isDark
      ? hexWithOpacity(darkColorCode, customOpacity)
      : hexWithOpacity(lightColorCode, customOpacity);
  } else if (colorMode === "rgba") {
    bgStyle.backgroundColor = isDark
      ? rgbaString(darkRgba, customOpacity)
      : rgbaString(lightRgba, customOpacity);
  } else if (colorMode === "tailwind") {
    bgClass = isDark ? darkTailwind : lightTailwind;
    bgStyle.opacity = customOpacity / 100;
  }

  return (
    <div className={`grid gap-5 w-full text-center`}>
      <button
        id="ThemeChanger"
        className={`cursor-pointer border-2 min-h-[50px] min-w-[150px] rounded-4xl p-1 w-fit mx-auto transition-colors duration-300 `}
        onClick={() => setIsDark((prev) => !prev)}
      >
        <span
          className={`transition-all duration-300 ${
            isDark ? "text-2xl font-bold" : "text-base text-black/50"
          }`}
        >
          Dark
        </span>
        <span className="text-2xl">/</span>
        <span
          className={`transition-all duration-300 ${
            !isDark ? "text-2xl font-bold" : "text-base text-black/50"
          }`}
        >
          Light
        </span>
      </button>
      <ColorCodeModeSelection
        colorMode={colorMode}
        setColorMode={setColorMode}
        isDark={isDark}
        // Hex
        lightColorCode={lightColorCode}
        darkColorCode={darkColorCode}
        setLightColorCode={setLightColorCode}
        setDarkColorCode={setDarkColorCode}
        // RGBA
        lightRgba={lightRgba}
        darkRgba={darkRgba}
        setLightRgba={setLightRgba}
        setDarkRgba={setDarkRgba}
        // Tailwind
        lightTailwind={lightTailwind}
        darkTailwind={darkTailwind}
        setLightTailwind={setLightTailwind}
        setDarkTailwind={setDarkTailwind}
        // 共用
        customOpacity={customOpacity}
        setCustomOpacity={setCustomOpacity}
      />
      <div
        id="Test-Content"
        className={`flex items-center justify-center min-h-[20vh] ${bgClass}`}
        style={bgStyle}
      >
        <span
          className={`${
            isDark ? "text-[#fff] border-[#fff]" : "text-[#000] border-black"
          } w-fit border transition-all duration-300 ${droppedIds.join(" ")}`}
        >
          Test
        </span>
      </div>
    </div>
  );
};

export default TailwindCSS_DisplayTest;
