import React from "react";

interface TailwindColorPanelProps {
  isDark: boolean;
  lightClass: string;
  darkClass: string;
  opacity: number;
  setLightClass: (v: string) => void;
  setDarkClass: (v: string) => void;
  setOpacity: (v: number) => void;
}

const TailwindColorPanel: React.FC<TailwindColorPanelProps> = ({
  lightClass,
  darkClass,
  opacity,
  setLightClass,
  setDarkClass,
  setOpacity,
}) => (
  <>
    <label className="flex flex-col">
      <div>Light Tailwind:</div>
      <input
        type="text"
        value={lightClass}
        onChange={(e) => setLightClass(e.target.value)}
        className="rounded w-fit max-w-[120px] text-center"
        placeholder="bg-orange-200"
      />
    </label>
    <label className="flex flex-col">
      <div>Dark Tailwind:</div>
      <input
        type="text"
        value={darkClass}
        onChange={(e) => setDarkClass(e.target.value)}
        className="rounded w-fit max-w-[120px] text-center"
        placeholder="bg-gray-900"
      />
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

export default TailwindColorPanel;
