"use client";

import { GameProvider } from "../store/gameContext";
import GameCards from "./components/GameCards";

export default function CardsPage() {
  return (
    <div>
      <GameProvider>
        <div>results</div>
        <GameCards />
      </GameProvider>
    </div>
  );
}
