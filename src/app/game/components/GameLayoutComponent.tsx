"use client";

import { useEffect } from "react";
import { ExitGameDialogProvider } from "../store/ExitGameDialogContext";
import { GameProvider } from "../store/gameContext";
import ExitGameDialog from "./ExitGameDialog";

export default function GameLayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Standard way of triggering the browser dialog.
      e.preventDefault();
      e.returnValue =
        "Se ricalchi la pagina perderai i progressi fatti, sei sicuro di voler uscire?";
      return e.returnValue;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <GameProvider>
      <ExitGameDialogProvider>
        <div className="flex h-svh w-svw items-center justify-center gap-8 overflow-hidden bg-background md:py-2">
          <div className="flex h-full w-full flex-col rounded-xl md:max-h-[840px] md:max-w-sm md:border md:bg-self-blue-300/10 md:shadow-xl md:shadow-self-blue-400/10">
            {children}
          </div>
          <ExitGameDialog />
        </div>
      </ExitGameDialogProvider>
    </GameProvider>
  );
}
