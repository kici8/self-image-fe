"use client"; // Error boundaries must be Client Components

import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="display flex min-h-screen flex-col items-center py-16 sm:py-24">
      <div>
        <Logo className="mx-auto mb-8 w-40 text-destructive" />
      </div>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold tracking-tight sm:text-2xl md:text-4xl">
        Pagina non trovata
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-lg">
        Qualcosa è andato storto, forse abbiamo smarrito la strada tra tutte
        queste stanze.
      </p>
      <Button className="mx-auto mt-4" onClick={() => router.push("/")}>
        Torna alla home
      </Button>
    </div>
  );
}
