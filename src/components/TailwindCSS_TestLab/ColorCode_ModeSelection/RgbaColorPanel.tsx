import React from "react";

interface RgbaColorPanelProps {
  isDark: boolean;
  lightRgba: string;
  darkRgba: string;
  opacity: number;
  setLightRgba: (v: string) => void;
  setDarkRgba: (v: string) => void;
  setOpacity: (v: number) => void;
}

const convertOpacityToDecimal = (opacity: number) => {
  return Math.max(0, Math.min(1, opacity / 100));
};

const getRgbaWithOpacity = (rgba: string, opacity: number) => {
  const parts = rgba.split(",");
  if (parts.length < 3) return rgba;
  parts[3] = convertOpacityToDecimal(opacity).toString();
  return parts.slice(0, 4).join(",");
};

const RgbaColorPanel: React.FC<RgbaColorPanelProps> = ({
  lightRgba,
  darkRgba,
  opacity,
  setLightRgba,
  setDarkRgba,
  setOpacity,
}) => (
  <>
    <label
      id="Light Box"
      className="flex flex-col"
      style={{
        backgroundColor: `rgba(${lightRgba})`,
        color: `rgba(${darkRgba})`,
      }}
    >
      <p>Light Theme</p>
      <div>
        bg-[rgba(
        <input
          type="text"
          value={getRgbaWithOpacity(lightRgba, opacity)}
          onChange={(e) => setLightRgba(e.target.value)}
          className="rounded w-fit max-w-[150px] text-center"
          placeholder={`255,255,255,${convertOpacityToDecimal(opacity)}`}
        />
        )]
      </div>
    </label>
    <label
      id="Dark Box"
      className="flex flex-col"
      style={{
        backgroundColor: `rgba(${darkRgba})`,
        color: `rgba(${lightRgba})`,
      }}
    >
      <p>Dark Theme</p>
      <div>
        bg-[rgba(
        <input
          type="text"
          value={getRgbaWithOpacity(darkRgba, opacity)}
          onChange={(e) => setDarkRgba(e.target.value)}
          className="rounded w-fit max-w-[150px] text-center"
          placeholder={`0,0,0,${convertOpacityToDecimal(opacity)}`}
        />
        )]
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

export default RgbaColorPanel;
