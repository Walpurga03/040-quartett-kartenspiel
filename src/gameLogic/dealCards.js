export const dealCards = (shuffledCards) => {
    const half = Math.ceil(shuffledCards.length / 2);
    const playerCards = shuffledCards.slice(0, half);
    const computerCards = shuffledCards.slice(half);
    return { playerCards, computerCards };
};