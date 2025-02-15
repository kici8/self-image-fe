"use client";
import GameLayoutComponent from "./components/GameLayoutComponent";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GameLayoutComponent>{children}</GameLayoutComponent>;
}
