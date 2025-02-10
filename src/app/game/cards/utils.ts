import { Card, CardSwipeDirection } from "../store/gameContext";

export const handleScore = ({
  direction,
  score,
  cards,
}: {
  direction: CardSwipeDirection | "";
  score: number;
  cards: Card[];
}) => {
  const currentCard = cards[cards.length - 1];
  const scoreIncrement = currentCard.answer === direction ? 1 : 0;
  return score + scoreIncrement;
};
