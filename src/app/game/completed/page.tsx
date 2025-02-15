"use client";

import { motion } from "framer-motion";
import AchieveBackground from "@/components/AchieveBackground";
import { Button } from "@/components/ui/button";
import { useExitGameDialog } from "../store/ExitGameDialogContext";
import { useRouter } from "next/navigation";

export default function GameCompleted() {
  const router = useRouter();
  const { setIsOpen } = useExitGameDialog();

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden">
      <AchieveBackground className="absolute z-0 min-h-full min-w-full text-self-blue-300/20" />

      <motion.div
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="z-10 flex h-full flex-col items-center justify-center px-8"
      >
        <h1 className="text-3xl font-bold">Complimenti!</h1>
        <p className="mb-8 text-center text-lg">
          Hai completato l&apos;esperienza, grazie per aver partecipato.
        </p>
        <div className="flex flex-col gap-4">
          <Button className="flex-1" onClick={() => router.push("/game/cards")}>
            Gioca Ancora
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setIsOpen(true)}
          >
            Esci
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
