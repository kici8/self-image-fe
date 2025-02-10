"use client";
import { createContext, useContext, useState } from "react";

export type Game = {
  id: number;
  cards: Card[];
};

export type Card = {
  id?: number;
  image: string;
  clusterId: string;
  clustersValues: {
    id: string;
    value: number; // negative or positive integer value from -12 to 12
  }[];
  filterId: string;
};

export type CardSwipeDirection = "left" | "right";
export type IsDragOffBoundary = "left" | "right" | null;

const useGameState = (initialGame: Game) => useState<Game>(initialGame);

const GameContext = createContext<ReturnType<typeof useGameState> | null>(null);

const GameProvider = ({
  game: initialGame,
  children,
}: {
  game: Game;
  children: React.ReactNode;
}) => {
  const [game, setGame] = useGameState(initialGame);

  return (
    <GameContext.Provider value={[game, setGame]}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

export const useGameContext = () => {
  const game = useContext(GameContext);
  if (!game) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return game;
};
