import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import ThemeProvider from "@/components/Context/ThemeProvider";

export const metadata: Metadata = {
  title: "Online UI Lab | Unleash Your Imagination",
  description:
    "A playground for creative UI experiments. Test, explore, and bring your boldest interface ideas to life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        {/* <ThemeProvider> */}
        <Header />
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
