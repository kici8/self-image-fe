'use client';

import Alert from '@/components/Alert';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// TODO: In this page, we will create a form to create a new room.
// The form will have an input field for the host code.
// On submit, we will send a request to the server to create a new room.
// If the room is created successfully, we will redirect the user to the room page.

export default function Home() {
  const [hasError, setHasError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const hostCode = form.get('hostCode') as string;

    console.log('send ', hostCode);

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
    <div className='min-h-svh bg-black py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <h2 className='mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
          Crea una nuova stanza
        </h2>
        <p className='mx-auto mt-6 max-w-lg text-center text-lg text-gray-300'>
          Inserisci il tuo Codice Host per creare una nuova stanza e iniziare
          l&apos;esperienza.
        </p>
        <form
          className='mx-auto mt-20 flex max-w-md gap-x-4'
          onSubmit={handleSubmit}
        >
          <label htmlFor='hostCode' className='sr-only'>
            Codice Host
          </label>
          <input
            id='hostCode'
            name='hostCode'
            type='password'
            autoComplete='password'
            required
            className='min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/40 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6'
            placeholder='Codice Host'
          />
          <button
            type='button'
            disabled={isLoading}
            className='inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
          >
            Button text
            <ArrowRightIcon aria-hidden='true' className='-mr-0.5 size-5' />
          </button>
        </form>
        {hasError && (
          <div className='mx-auto mt-4 max-w-md'>
            <Alert
              type='error'
              title='Errore: impossibile creare la stanza'
              messages={[
                'Il Codice Host potrebbe essere non valido',
                'Oppure potrebbe esserci un disservizio momentaneo',
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
