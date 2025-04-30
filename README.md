This project represents the frontend of the "Self-Image" application, firstly used in the context of the school workshop "Digital Me: Immagini del Sé nell'Era Digitale".
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
The application is written in TypeScript and uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Install dependencies

To install the dependencies, you can use either `npm` or `yarn`. The recommended way is to use `yarn`.

```bash
yarn install
# or
npm install
```

## Environment Variables

Add the following variables to your .env file:

```env
    NEXT_PUBLIC_HOSTNAME
    NEXT_PUBLIC_API_URL
    NEXT_PUBLIC_SOCKET_URL
    NEXT_PUBLIC_SNAP_API_TOKEN
    NEXT_PUBLIC_SNAP_LENS_GROUP_ID
```

- NEXT_PUBLIC_HOSTNAME: Specifies the hostname of the production API server. (e.g., `api.example.com`)
- NEXT_PUBLIC_API_URL: The base URL used for making API requests. (e.g., `https://api.example.com`)
- NEXT_PUBLIC_SOCKET_URL: The URL used to connect to the Socket.IO server. (e.g., `https://api.example.com`)
- NEXT_PUBLIC_SNAP_API_TOKEN: The API token for authenticating with Snapchat. You need a Snapchat account with an application and its associated lenses. (e.g., `your_snap_api_token`)
- NEXT_PUBLIC_SNAP_LENS_GROUP_ID: The identifier for the Snapchat lens group. (e.g., `your_snap_lens_group_id`)

## Run the app locally

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is structured as follows

```
.env
/src
    ├── app
        ├── api
        ├── game
        ├── room
    ├── components
    ├── lib
        ├── api.ts
        ├── hooks
        ├── context
        ├── ourData
```

- `app`: This directory contains the main application code, including the API routes and pages.
- `app/api`: This directory contains the API routes for the application. At the moment, it contains only the `generate-results-pdf` endpoint, which generates a PDF file with the results of the game.
- `app/game`: This directory contains the game logic and components.
- `app/room`: This directory contains the logic and components related to the room dashboard.
- `components`: This directory contains reusable UI components for the application.
- `lib`: This directory contains utility functions and libraries used throughout the application (e.g., the hooks for managing the socket connection, the snapchat cameraKit context, etc...).
- `lib/ourData`: This directory contains the hardcoded common data used in the game and the room dashboard. The Snapchat lenses are associated with the images through the `filter_id` property in staticClusterImages.

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) or, as we do, [Railway](https://railway.app). But you can also deploy it to your own server or any other hosting provider that supports Node.js.

## License

This project is licensed under the Creative Commons Attribution‑NonCommercial 4.0 International License. See [LICENSE.md](./LICENSE.md) for details.
