import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  AlertTriangleIcon,
  CircleCheckIcon,
  InfoIcon,
  ZapIcon,
  ZapOffIcon,
} from "lucide-react";
import { JSX } from "react";

const connectionIndicatorClasses = cva(
  "absolute z-0 h-full w-full animate-pulse rounded-full border-2",
  {
    variants: {
      isConnected: {
        true: "border-primary text-primary",
        false: "border-destructive bg-destructive/60",
      },
    },
  },
);

type ConnectionState = {
  isRoomConnected: boolean;
  isSocketConnected: boolean;
};

type ConnectionMapResponse = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const iconClasses = cva("mb-2 h-5 w-5", {
  variants: {
    isConnected: {
      success: "text-green-700 dark:text-green-300",
      error: "text-destructive",
      info: "text-primary",
    },
  },
});

const connectionMap = new Map<ConnectionState, ConnectionMapResponse>([
  [
    { isRoomConnected: true, isSocketConnected: false },
    {
      title: "Impossibile connettersi alla stanza e al server",
      description: "Controlla la tua connessione o riprova più tardi.",
      icon: (
        <AlertTriangleIcon className={iconClasses({ isConnected: "error" })} />
      ),
    },
  ],
  [
    { isRoomConnected: false, isSocketConnected: true },
    {
      title: "Impossibile connettersi alla stanza",
      description:
        "Potrebbe non esistere, essere chiusa o avere problemi di connessione.",
      icon: (
        <AlertTriangleIcon className={iconClasses({ isConnected: "error" })} />
      ),
    },
  ],
  [
    { isRoomConnected: false, isSocketConnected: false },
    {
      title: "Impossibile connettersi alla stanza e al server",
      description: "Controlla la tua connessione o riprova più tardi.",
      icon: (
        <AlertTriangleIcon className={iconClasses({ isConnected: "error" })} />
      ),
    },
  ],
  [
    { isRoomConnected: true, isSocketConnected: true },
    {
      title: "Connesso!",
      description: "I risultati verranno aggiornati in tempo reale.",
      icon: (
        <CircleCheckIcon className={iconClasses({ isConnected: "success" })} />
      ),
    },
  ],
]);

function getConnectionMap(state: ConnectionState): ConnectionMapResponse {
  for (const [key, value] of connectionMap.entries()) {
    if (
      key.isRoomConnected === state.isRoomConnected &&
      key.isSocketConnected === state.isSocketConnected
    ) {
      return value;
    }
  }
  return {
    title: "Stato connessione",
    description:
      "Se riscontri problemi nella visualizzazione dei dati potrebbe dipendere da diversi fattori: la stanza potrebbe non esistere, essere chiusa o potrebbero esserci problemi di connessione.",
    icon: <InfoIcon className={iconClasses({ isConnected: "info" })} />,
  };
}

export default function ConnectionIndicator({
  isRoomConnected,
  isSocketConnected,
}: ConnectionState) {
  const status = getConnectionMap({ isRoomConnected, isSocketConnected });
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="relative flex h-8 w-8 items-center justify-center">
          <div
            className={cn(
              connectionIndicatorClasses({
                isConnected: isRoomConnected && isSocketConnected,
              }),
            )}
          ></div>
          {isRoomConnected && isSocketConnected ? (
            <ZapIcon className="z-10 h-5 w-5" />
          ) : (
            <ZapOffIcon className="z-10 h-5 w-5" />
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        {status.icon}
        <h3 className="text-md font-semibold">{status.title}</h3>
        <p className="text-sm">{status.description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
