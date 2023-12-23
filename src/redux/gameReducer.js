// gameReducer.js
import { shuffleCards } from '../gameLogic/shuffleCards';
import { dealCards } from '../gameLogic/dealCards';
import { START_GAME } from './actionTypes';
import newCards from '../data/cardsData';

const initialState = {
    playerCards: [],
    computerCards: [],
    drawPile: [], 
    isGameStarted: false,
    currentPlayer: 'player', 
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case START_GAME:
        const shuffledCards = shuffleCards(newCards);
        const { playerCards, computerCards } = dealCards(shuffledCards);
        return {
          ...state,
          playerCards,
          computerCards,
          isGameStarted: true,
        };
      default:
        return state;
    }
};

export default gameReducer;
