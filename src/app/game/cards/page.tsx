import GameProvider, { Game } from "../store/gameContext";
import GameCards from "./components/GameCards";

export default function CardsPage() {
  const game: Game = {
    id: 1,
    cards: [
      // TODO:
    ],
  };

  return (
    <div>
      <GameProvider game={game}>
        <div>results</div>
        <GameCards />
      </GameProvider>
    </div>
  );
}
