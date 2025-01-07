import { Button } from '@/components/ui/button';

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

  // // The room code
  // // The qr to join the room // TODO: ask what data to put in the qr
  // // The list of users that ask to join the room or just the counter

  // // Results and categories

  // // New session button
  // // Download results button
  // // Close room button
  return (
    <div className='flex h-svh'>
      <div className='flex-1'>images</div>

      <div className='flex min-w-96 flex-grow-0 flex-col gap-6 bg-green-400 p-3'>
        <div className='flex flex-grow-0 flex-col gap-6 rounded-xl bg-foreground/10 p-3'>
          <div className='flex'>
            <div className='flex h-24 w-24 items-center justify-center rounded-sm bg-white p-1'>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${code}`}
                alt={`QR code for room ${code}`}
                className='block flex-1'
              />
            </div>

            <div className='flex flex-1 flex-col justify-center px-6'>
              <h2 className='text-4xl font-semibold italic'>{code}</h2>
              <p className='text-sm'>Entra nella stanza</p>
            </div>
          </div>

          <div className='flex flex-col text-sm'>
            <div className='flex gap-1'>
              Utenti entrati:<span className='font-bold'>21</span>
            </div>
            <div className='flex gap-1'>
              Record inviati in questa sessione:
              <span className='font-bold'>3</span>
            </div>
          </div>
          <Button>Nuova sessione</Button>
        </div>

        <div className='flex flex-1 flex-col gap-2'>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div className='flex items-center gap-4' key={i}>
              <div className='h-12 w-12 grow-0 bg-slate-600'>icon</div>
              <div className='flex flex-1 flex-col'>
                <p>Nome categoria</p>
                <div className='h-1 w-full bg-red-400'>
                  <div className='h-full w-16 flex-1 rounded-lg bg-slate-600'></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex gap-2'>
          <Button variant='outline' className='flex-1'>
            Scarica risultati
          </Button>
          <Button variant='destructive' className='flex-1'>
            Chiudi stanza
          </Button>
        </div>
      </div>
    </div>
  );
}
