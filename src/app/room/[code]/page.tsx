import Alert from "@/components/Alert";
import Room from "./components/Room";

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;

  if (code) return <Room code={code} />;
  else
    return (
      <div className="mx-auto mt-16 max-w-md">
        <Alert type="error" title="Errore: impossibile trovare la stanza" />
      </div>
    );
}
