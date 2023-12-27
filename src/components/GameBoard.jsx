import '../styles/GameBoard.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, compareCardProperties } from '../redux/actions';
import { selectHighestPropertyForComputer } from '../logic/gameLogic';
import Card from './Card';

const GameBoard = () => {
    const { playerCards, computerCards, isGameStarted, isPlayerTurn } = useSelector(state => state.game);
    const dispatch = useDispatch();

    const handleStartGame = () => {
        dispatch(startGame());
    };

    const handlePropertyClick = (property) => {
        if (playerCards.length > 0 && computerCards.length > 0 && isPlayerTurn) {
            dispatch(compareCardProperties(playerCards[0], computerCards[0], property));
        }
    };

    const handleComputerTurn = () => {
        if (computerCards.length > 0 && !isPlayerTurn) {
            const selectedProperty = selectHighestPropertyForComputer(computerCards[0]);
            dispatch(compareCardProperties(playerCards[0], computerCards[0], selectedProperty));
        }
    };

    return (
        <div>
            {isGameStarted ? (
                <div className="game-container">
                    <div className="player-cards">
                        <div className="card-count">Spieler Karten: {playerCards.length}</div>
                        {playerCards.length > 0 && 
                            <Card 
                                card={playerCards[0]} 
                                onPropertyClick={handlePropertyClick}
                                isClickable={isPlayerTurn} 
                            />
                        }
                    </div>
                    <div className="computer-cards">
                        <div className="card-count">Computer Karten: {computerCards.length}</div>
                        {computerCards.length > 0 && 
                            <Card 
                                card={computerCards[0]}
                                isClickable={false} 
                            />
                        }
                    </div>
                    {!isPlayerTurn && (
                        <button onClick={handleComputerTurn}>Computerzug</button>
                    )}
                </div>
            ) : (
                <button onClick={handleStartGame}>Spiel Starten</button>
            )}
        </div>
    );
};

export default GameBoard;
