"use client";
import { GameProvider } from "./store/gameContext";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GameProvider>
      <div className="flex h-svh w-svw items-center justify-center gap-8 overflow-hidden bg-self-blue-900">
        <div className="flex h-full max-h-[840px] w-full max-w-sm flex-col rounded-xl px-2 md:border md:border-self-blue-300/40 md:bg-self-blue-300/10 md:shadow-xl md:shadow-self-blue-400/10">
          {children}
        </div>
      </div>
    </GameProvider>
  );
}
