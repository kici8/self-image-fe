import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  DownloadIcon,
  FileX2Icon,
  GlassesIcon,
  Grid2x2XIcon,
  PaletteIcon,
  RefreshCwIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
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

  const iconClasses = cn("h-6 w-6 shrink-0 grow-0");

  const categories = [
    {
      id: "A",
      name: "Pittorico - figurativo - grafico",
      percentage: 5,
      icon: <PaletteIcon className={iconClasses} />,
    },
    {
      id: "B",
      name: "Ostacolo - ambiguità - duplicità",
      percentage: 15,
      icon: <SmileIcon className={cn(iconClasses, "-rotate-90")} />,
    },
    {
      id: "C",
      name: "Di persona - in presenza - interpellazione",
      percentage: 20,
      icon: <UserIcon className={iconClasses} />,
    },
    {
      id: "D",
      name: "Artefatto - truccato - mascherato",
      percentage: 40,
      icon: <GlassesIcon className={iconClasses} />,
    },
    {
      id: "E",
      name: "Assemblaggio - composizione - frammenti",
      percentage: 10,
      icon: <BoxIcon className={iconClasses} />,
    },
    {
      id: "F",
      name: "Assenza - mancanza - incompiutezza",
      percentage: 0,
      icon: <Grid2x2XIcon className={iconClasses} />,
    },
  ];

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
          {categories.map(({ icon, id, name, percentage }) => (
            <div
              key={id}
              className="flex items-center space-x-4 rounded-lg bg-card px-4 py-3"
            >
              <div className="flex-shrink-0">{icon}</div>
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-card-foreground">
                  {name}
                </h3>
                <Progress value={percentage} className="mt-2 h-2" />
              </div>
              <div className="flex-shrink-0 text-sm text-muted-foreground">
                {percentage}%
              </div>
            </div>
          ))}
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
