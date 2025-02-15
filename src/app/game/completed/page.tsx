"use client";

import { motion } from "framer-motion";
import AchieveBackground from "@/components/AchieveBackground";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GameCompleted() {
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
        <Link href="/game/cards">
          <Button>Gioca Ancora</Button>
        </Link>
      </motion.div>
    </div>
  );
}
