import { Button } from "@/components/ui/button";
import { DownloadIcon, FileX2Icon, RefreshCwIcon } from "lucide-react";
import CategoryList from "./components/CategoryList";
import ImageGrid from "./components/ImageGrid";

// TODO: maybe use query params instead of path params and make the page client-side only
export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;

  // TODO: listen for changes in the room and update the UI accordingly
  // On the main content show the gallery of images

  // On the sidebar show:

  // // The room code ✅
  // // The qr to join the room // TODO: ask what data to put in the qr
  // // The list of users that ask to join the room or just the counter

  // // Results and categories ✅

  // // New session button ✅
  // // Download results button ✅
  // // Close room button ✅

  return (
    <div className="flex h-svh">
      <div className="flex-1">
        <ImageGrid />
      </div>

      <div className="flex min-w-96 flex-grow-0 flex-col gap-6 p-3">
        <div className="flex flex-grow-0 flex-col gap-6 rounded-xl bg-card p-3">
          <div className="flex">
            <div className="flex h-24 w-24 items-center justify-center rounded-sm bg-white p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${code}`}
                alt={`QR code for room ${code}`}
                className="block flex-1"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center px-6">
              <h2 className="text-4xl font-semibold italic">{code}</h2>
              <p className="text-sm text-muted-foreground">
                Entra nella stanza
              </p>
            </div>
          </div>

          <div className="flex flex-col text-sm">
            <div className="flex gap-1 text-muted-foreground">
              Utenti entrati:
              <span className="font-bold text-primary">21</span>
            </div>
            <div className="flex gap-1 text-muted-foreground">
              Record inviati in questa sessione:
              <span className="font-bold text-primary">3</span>
            </div>
          </div>
          <Button>
            Nuova sessione
            <RefreshCwIcon />
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <CategoryList />
        </div>

        <div className="flex gap-2 rounded-lg bg-card px-4 py-4">
          <Button variant="outline" className="flex-1">
            Scarica risultati
            <DownloadIcon />
          </Button>
          <Button variant="destructive" className="flex-1">
            Chiudi stanza
            <FileX2Icon />
          </Button>
        </div>
      </div>
    </div>
  );
}
