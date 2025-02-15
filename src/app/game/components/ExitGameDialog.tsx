"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React from "react";
import { useExitGameDialog } from "../store/ExitGameDialogContext";

const ExitGameDialog: React.FC = () => {
  // Hooks
  const router = useRouter();

  // State
  const { isOpen, setIsOpen } = useExitGameDialog();

  // Callbacks
  const handleExitGame = () => {
    localStorage.removeItem("player_id");
    setIsOpen(false);
    router.push("/");
  };

  // Render

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Esci dal gioco</DialogTitle>
          <DialogDescription>
            Se esci dal gioco non potrai continuare a giocare con questo nome,
            sei sicuro di voler uscire?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex flex-col gap-1 md:flex-row">
          <DialogClose asChild>
            <Button>Rimani</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleExitGame}>
            Esci dal gioco
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExitGameDialog;
