const safelist = [
  ...Array.from({ length: 101 }, (_, i) => `p-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `m-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `px-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `py-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pt-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pb-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pl-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `pr-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mx-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `my-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mt-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mb-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `ml-${i}`),
  ...Array.from({ length: 101 }, (_, i) => `mr-${i}`),
];

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist,
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;