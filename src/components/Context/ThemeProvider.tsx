"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      // value={{ dark: "dark", light: "" }}
      defaultTheme="system"
      enableSystem
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
