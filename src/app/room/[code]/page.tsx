import Alert from "@/components/Alert";
import { Metadata } from "next";
import Room from "./components/Room";

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const code = (await params).code;

  return {
    title: `Self Image - Stanza ${code}`,
    openGraph: {
      title: `Self Image - Stanza ${code}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const code = (await params).code;

  if (code) return <Room code={code} />;
  else
    return (
      <div className="mx-auto mt-16 max-w-md">
        <Alert type="error" title="Errore: impossibile trovare la stanza" />
      </div>
    );
}
