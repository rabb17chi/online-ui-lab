import React from "react";

interface HexColorPanelProps {
  isDark: boolean;
  lightColor: string;
  darkColor: string;
  opacity: number;
  setLightColor: (v: string) => void;
  setDarkColor: (v: string) => void;
  setOpacity: (v: number) => void;
}

const HexColorPanel: React.FC<HexColorPanelProps> = ({
  lightColor,
  darkColor,
  opacity,
  setLightColor,
  setDarkColor,
  setOpacity,
}) => (
  <>
    <label
      className="flex flex-col"
      style={{ backgroundColor: lightColor, color: darkColor }}
    >
      <p>Light Theme</p>
      <div>
        bg-[
        <input
          type="text"
          value={lightColor}
          onChange={(e) => setLightColor(e.target.value)}
          className="rounded w-fit max-w-[90px] text-center"
          placeholder="#fff"
        />
        ]/{opacity}
      </div>
    </label>
    <label
      className="flex flex-col"
      style={{ backgroundColor: darkColor, color: lightColor }}
    >
      <p>Dark Theme</p>
      <div>
        bg-[
        <input
          type="text"
          value={darkColor}
          onChange={(e) => setDarkColor(e.target.value)}
          className="rounded w-fit max-w-[90px] text-center"
          placeholder="#000"
        />
        ]/{opacity}
      </div>
    </label>
    <label className="flex flex-col">
      <div>Opacity:</div>
      <input
        type="number"
        min={0}
        max={100}
        step={5}
        value={opacity}
        onChange={(e) => {
          let val = Math.round(Number(e.target.value) / 5) * 5;
          val = Math.max(0, Math.min(100, val));
          setOpacity(val);
        }}
        className="border rounded px-2 py-1 mt-1"
        placeholder="80"
      />
    </label>
  </>
);

export default HexColorPanel;
