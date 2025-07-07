import React from "react";

const arr = [
  ...Array.from({ length: 101 }, (_, i) => `m-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `p-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `ml-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mr-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mt-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mb-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pl-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pr-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pt-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pb-${i}`),
];

const TailwindCSS_SAFELIST = () => {
  return <div className={`hidden ${arr.join(" ")}`}>TailwindCSS_SAFELIST</div>;
};

export default TailwindCSS_SAFELIST;
