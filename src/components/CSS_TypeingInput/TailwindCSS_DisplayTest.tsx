import React from "react";

interface TailwindCSS_DisplayTestProps {
  droppedIds: string[];
}

const TailwindCSS_DisplayTest: React.FC<TailwindCSS_DisplayTestProps> = ({
  droppedIds,
}) => {
  return (
    <div id="Test-Content" className={`${droppedIds.join(" ")}`}>
      Test
    </div>
  );
};

export default TailwindCSS_DisplayTest;
