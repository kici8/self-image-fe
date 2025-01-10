"use client";

import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createStrapiRoom } from "@/lib/api";
import { ArrowRightIcon, LoaderCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// TODO: In this page, we will create a form to create a new room.
// The form will have an input field for the host code.
// On submit, we will send a request to the server to create a new room.
// If the room is created successfully, we will redirect the user to the room page.

export default function Home() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // const form = event.currentTarget;
    // const hostCode = form.get("hostCode") as string;
    // console.log("TODO: add an hardcoded code?", hostCode);

    try {
      // TODO: change with right one
      const newRoom = await createStrapiRoom({
        data: {
          stage: "OPEN",
          host: {
            id: 1,
            username: "artusi.daniele@gmail.com",
            email: "artusi.daniele@gmail.com",
          },
        },
      });
      router.push(
        //TODO: change `/room/${newRoom.room_code}?session_id=${newRoom.session_id}`,
        `/room/${newRoom.data.code}?session_id=${newRoom.data.id}`,
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(`Failed to create room: ${err.message}`);
      } else {
        setError("Failed to create room: Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="background min-h-svh py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Crea una nuova stanza
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-center text-lg">
          Inserisci il tuo Codice Host per creare una nuova stanza e iniziare
          l&apos;esperienza.
        </p>
        <form
          className="mx-auto mt-20 flex max-w-md gap-x-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="hostCode" className="sr-only">
            Codice Host
          </label>
          <Input
            id="hostCode"
            name="hostCode"
            type="password"
            disabled={isLoading}
            autoComplete="password"
            // required
            placeholder="Codice Host"
          />
          <Button disabled={isLoading} type="submit">
            Crea Stanza
            {isLoading ? (
              <LoaderCircleIcon className="animate-spin" />
            ) : (
              <ArrowRightIcon />
            )}
          </Button>
        </form>
        {error && (
          <div className="mx-auto mt-4 max-w-md">
            <Alert
              type="error"
              title="Errore: impossibile creare la stanza"
              messages={[
                "Il Codice Host potrebbe essere non valido",
                "Oppure potrebbe esserci un disservizio momentaneo",
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
