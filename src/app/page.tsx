"use client";

import Alert from "@/components/Alert";
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinRoom } from "@/lib/api";
import { motion } from "framer-motion";
import { LoaderCircleIcon, LogInIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import GameLayoutComponent from "./game/components/GameLayoutComponent";
import Link from "next/link";

function Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roomCodeParam = searchParams.get("room_code");

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
            placeholder="Marco"
            className="block w-full"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="room_code" className="block text-sm/6 font-medium">
            Codice stanza
          </label>
        </div>
        <div className="mt-2">
          <Input
            defaultValue={roomCodeParam || undefined}
            disabled={isLoading}
            id="room_code"
            name="room_code"
            type="text"
            required
            placeholder="ABC123"
            className="block w-full font-mono"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button type="submit" className="w-full" disabled={isLoading}>
          Unisciti alla stanza
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            <LogInIcon />
          )}
        </Button>

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
    </form>
  );
}

export default function GameLogin() {
  return (
    <GameLayoutComponent>
      <div className="mx-auto flex h-full w-full max-w-sm overflow-auto">
        <div className="flex w-full flex-col items-center px-4 py-8">
          <motion.div
            className="w-full"
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Logo className="mx-auto h-14 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
              Unisciti alla stanza
            </h2>
          </motion.div>

          <div className="mt-10 w-full">
            <motion.div
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Suspense fallback={null}>
                <Form />
              </Suspense>
            </motion.div>

            <motion.p
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 text-center text-sm/6"
            >
              <Link
                href="/privacy.pdf"
                download
                className="font-semibold text-self-blue-300 hover:text-self-blue-200"
              >
                Leggi l&apos;informativa sulla privacy
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </GameLayoutComponent>
  );
}
