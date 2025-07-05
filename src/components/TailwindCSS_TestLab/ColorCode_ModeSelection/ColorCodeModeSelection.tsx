import React from "react";

// 各模式元件
import HexColorPanel from "./HexColorPanel";
import RgbaColorPanel from "./RgbaColorPanel";
import TailwindColorPanel from "./TailwindColorPanel";

type ColorMode = "hex" | "rgba";

interface ColorCodeModeSelectionProps {
  colorMode: ColorMode;
  isDark: boolean;
  // Hex
  lightColorCode: string;
  darkColorCode: string;
  setLightColorCode: (v: string) => void;
  setDarkColorCode: (v: string) => void;
  // RGBA
  lightRgba: string;
  darkRgba: string;
  setLightRgba: (v: string) => void;
  setDarkRgba: (v: string) => void;
  // Tailwind
  lightTailwind: string;
  darkTailwind: string;
  setLightTailwind: (v: string) => void;
  setDarkTailwind: (v: string) => void;
  // 共用
  customOpacity: number;
  setCustomOpacity: (v: number) => void;
  setColorMode: (v: ColorMode) => void;
}

const ColorCodeModeSelection: React.FC<ColorCodeModeSelectionProps> = ({
  colorMode,
  isDark,
  lightColorCode,
  darkColorCode,
  setLightColorCode,
  setDarkColorCode,
  lightRgba,
  darkRgba,
  setLightRgba,
  setDarkRgba,
  lightTailwind,
  darkTailwind,
  setLightTailwind,
  setDarkTailwind,
  customOpacity,
  setCustomOpacity,
  setColorMode,
}) => {
  return (
    <div className="flex gap-4 items-end justify-around">
      <label className="flex flex-col">
        <div>Color Mode:</div>
        <select
          value={colorMode}
          onChange={(e) => setColorMode(e.target.value as ColorMode)}
          className="border rounded px-2 py-1 mt-1"
        >
          <option value="hex">Hex + Opacity</option>
          <option value="rgba">RGBA</option>
          {/* <option value="tailwind">Tailwind Class</option> */}
        </select>
      </label>
      {colorMode === "hex" && (
        <HexColorPanel
          isDark={isDark}
          lightColor={lightColorCode}
          darkColor={darkColorCode}
          opacity={customOpacity}
          setLightColor={setLightColorCode}
          setDarkColor={setDarkColorCode}
          setOpacity={setCustomOpacity}
        />
      )}
      {colorMode === "rgba" && (
        <RgbaColorPanel
          isDark={isDark}
          lightRgba={lightRgba}
          darkRgba={darkRgba}
          opacity={customOpacity}
          setLightRgba={setLightRgba}
          setDarkRgba={setDarkRgba}
          setOpacity={setCustomOpacity}
        />
      )}
      {/* {colorMode === "tailwind" && (
        <TailwindColorPanel
          isDark={isDark}
          lightClass={lightTailwind}
          darkClass={darkTailwind}
          opacity={customOpacity}
          setLightClass={setLightTailwind}
          setDarkClass={setDarkTailwind}
          setOpacity={setCustomOpacity}
        />
      )} */}
    </div>
  );
};

export default ColorCodeModeSelection;
