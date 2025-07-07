import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import TailwindCSS_SAFELIST from "@/components/Layout/TailwindCSS_SAFELIST";

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
        {/* <TailwindCSS_SAFELIST /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
