import React, { useState } from "react";

interface TailwindCSS_DisplayTestProps {
  droppedIds: string[];
}

const TailwindCSS_DisplayTest: React.FC<TailwindCSS_DisplayTestProps> = ({
  droppedIds,
}) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`grid gap-5 w-full text-center`}>
      <button
        id="ThemeChanger"
        className={`cursor-pointer border-2 min-h-[50px] p-1 w-fit mx-auto transition-colors duration-300 `}
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
      <p className="text-start">
        Current Background Color Status:{" "}
        <span
          className={`p-2 ${
            isDark ? "bg-[#333]/80 text-white" : "bg-[#fff]/80 text-black"
          }`}
        >
          {isDark ? "#333" : "#fff"}
        </span>{" "}
        (with 80 opacity)
      </p>
      <div
        id="Test-Content"
        className={`flex items-center justify-center min-h-[20vh] transition-all duration-300 ${
          isDark ? "bg-[#333]/80" : "bg-white/80"
        } ${droppedIds.join(" ")}`}
      >
        Test
      </div>
    </div>
  );
};

export default TailwindCSS_DisplayTest;
