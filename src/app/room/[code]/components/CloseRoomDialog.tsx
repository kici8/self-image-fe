import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoaderCircleIcon, LogOutIcon, Trash2Icon } from "lucide-react";

type CloseRoomDialogProps = {
  onCloseRoom: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLoading: boolean;
  disabled: boolean;
};

export default function CloseRoomDialog({
  onCloseRoom,
  isLoading,
  isOpen,
  disabled,
  setIsOpen,
}: CloseRoomDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="flex-1"
          disabled={disabled || isLoading}
        >
          Chiudi
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            <LogOutIcon />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chiudi stanza</DialogTitle>
          <DialogDescription>
            Chiudendo la stanza tutti i dati verranno cancellati, assicurati di
            aver prima salvato i risultati.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex flex-col gap-1 md:flex-row">
          <DialogClose asChild>
            <Button>Torna alla stanza</Button>
          </DialogClose>
          <Button variant="destructive" onClick={onCloseRoom}>
            Chiudi e rimuovi i dati
            <Trash2Icon />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
