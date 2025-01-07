"use client";

import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, LoaderCircleIcon } from "lucide-react";
import { useState } from "react";

// TODO: In this page, we will create a form to create a new room.
// The form will have an input field for the host code.
// On submit, we will send a request to the server to create a new room.
// If the room is created successfully, we will redirect the user to the room page.

export default function Home() {
  const [hasError] = useState(true);
  const [isLoading] = useState(true);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const hostCode = form.get("hostCode") as string;

    console.log("send ", hostCode);

    // TODO: Send a request to the server to create a new room.
    // TODO: handle the response and redirect the user to the room page.
    // TODO: If there is an error, show an error message to the user.
    // fetch("/api/rooms", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ hostCode }),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Failed to create room");
    //     }
    //   })
    //   .then((data) => {
    //     window.location.href = `/room/${data.id}`;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

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
            required
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
        {hasError && (
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
