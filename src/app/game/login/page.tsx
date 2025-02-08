"use client";

import Alert from "@/components/Alert";
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinRoom } from "@/lib/api";
import { LoaderCircleIcon, LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Example() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await joinRoom({
        nickname: event.currentTarget.nickname.value,
        room_code: event.currentTarget.room_code.value,
      });
      localStorage.setItem("player_id", response.player_id);
      router.push(`/game/cards`);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Failed to join room: ${err.message}`);
      } else {
        setError("Failed to join room: Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo className="mx-auto h-14 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Unisciti alla stanza
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nickname" className="block text-sm/6 font-medium">
                Nome
              </label>
              <div className="mt-2">
                <Input
                  disabled={isLoading}
                  id="nickname"
                  name="nickname"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="Inserisci il tuo nome"
                  className="block w-full"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="room_code"
                  className="block text-sm/6 font-medium"
                >
                  Codice stanza
                </label>
              </div>
              <div className="mt-2">
                <Input
                  disabled={isLoading}
                  id="room_code"
                  name="room_code"
                  type="text"
                  required
                  placeholder="Inserisci il codice a 6 cifre"
                  className="block w-full"
                />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                Unisciti alla stanza
                {isLoading ? (
                  <LoaderCircleIcon className="animate-spin" />
                ) : (
                  <LogInIcon />
                )}
              </Button>
            </div>
          </form>

          {/* 
          TODO: aggiungere informativa privacy 
          */}
          <p className="mt-10 text-center text-sm/6">
            <a
              href="#"
              className="font-semibold text-self-blue-300 hover:text-self-blue-200"
            >
              Leggi l&apos;informativa sulla privacy
            </a>
          </p>

          {error && (
            <div className="mx-auto mt-4 max-w-md">
              <Alert
                type="error"
                title="Errore: impossibile unirsi alla stanza"
                messages={[
                  "Controlla il codice della stanza o riprova più tardi",
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
