"use client";

import React, { useRef, useState } from "react";
import TailwindCSS_DisplayTest from "./TailwindCSS_DisplayTest";

const FADE_DURATION = 400; // ms

const DragDropDemo = () => {
  const [droppedIds, setDroppedIds] = useState<string[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [isClearing, setIsClearing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [draggable, setDraggable] = useState([
    "text-red-300",
    "text-5xl",
    "font-bold",
  ]);

  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleDragStart =
    (item: string) => (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("text/plain", item.toString());
    };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggingIndex(null);
    const data = e.dataTransfer.getData("text/plain");
    setDroppedIds((prev) => (prev.includes(data) ? prev : [...prev, data]));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setIsClearing(true);
    setTimeout(() => {
      setDroppedIds([]);
      setIsClearing(false);
    }, FADE_DURATION);
  };

  // 拖曳 dropped 區塊內 item
  const handleDroppedDragStart =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(index);
      e.dataTransfer.setData("text/plain", droppedIds[index]);
    };

  // 拖曳結束時，判斷滑鼠是否還在 drop 區
  const handleDroppedDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (dropZoneRef.current && draggingIndex !== null) {
      const dropZone = dropZoneRef.current;
      const rect = dropZone.getBoundingClientRect();
      const { clientX, clientY } = e;
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        setDroppedIds((prev) => prev.filter((_, i) => i !== draggingIndex));
      }
    }
    setDraggingIndex(null);
  };

  const handleAddToDraggable = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !draggable.includes(trimmed)) {
      setDraggable((prev) => [...prev, trimmed]);
      setInputValue("");
    }
  };

  // const draggable = ["text-red-300", "text-5xl", "font-bold"];

  return (
    <div className="flex flex-col items-center gap-8 rounded-xl bg-blue-300/40 p-5">
      <div id="TailwindCSS Selector Section Intro" className="text-3xl">
        <p className="text-center">
          {" "}
          You are trying the
          <span className="underline underline-offset-4 cursor-pointer hover:bg-green-300 transition-colors duration-300 rounded-xl p-2">
            TailwindCSS
          </span>
          .
        </p>
        <br /> Try to add the value into the dotted area to see what happen.
        <div>
          <input
            type="text"
            placeholder="TailwindCSS-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button
            onClick={handleAddToDraggable}
            className="ml-2 px-3 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
          >
            Add to list
          </button>
        </div>
      </div>
      <button
        onClick={handleClear}
        className={`px-4 py-2 rounded transition 
          ${
            droppedIds.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-400 text-white hover:bg-red-500 cursor-pointer"
          }`}
        disabled={!droppedIds.length || isClearing}
      >
        CLEAR
      </button>
      <div id="Dragable Items" className="flex gap-2">
        {draggable.map((item) => (
          <div
            draggable
            key={item}
            onDragStart={handleDragStart(item)}
            onClick={() => {
              setDroppedIds((prev) =>
                prev.includes(item) ? prev : [...prev, item]
              );
            }}
            className={`px-4 py-2 rounded ${
              droppedIds.includes(item)
                ? "bg-green-300 cursor-default"
                : "bg-gray-200 cursor-pointer"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        id="Display Dragged Items"
        ref={dropZoneRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-[90%] h-32 border-2 border-dashed border-gray-400 flex items-center justify-center rounded flex-wrap gap-2"
      >
        {droppedIds.length > 0
          ? droppedIds.map((style, index) => (
              <div
                key={index}
                draggable
                onDragStart={handleDroppedDragStart(index)}
                onDragEnd={handleDroppedDragEnd}
                className={`px-4 py-2 bg-gray-200 rounded cursor-move m-1 transition-opacity duration-400 ${
                  isClearing ? "opacity-0" : "opacity-100"
                }`}
                style={{ transitionDuration: `${FADE_DURATION}ms` }}
              >
                {style}
              </div>
            ))
          : "Drag/Tap to apply and test!"}
      </div>
      <TailwindCSS_DisplayTest droppedIds={droppedIds} />
    </div>
  );
};

export default DragDropDemo;
