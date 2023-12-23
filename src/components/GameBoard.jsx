// GameBoard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../redux/actions';
import { useSelector } from 'react-redux';


const GameBoard = () => {
    const { playerCards, computerCards, isGameStarted } = useSelector(state => state.game);

    const dispatch = useDispatch();

    const handleStartGame = () => {
        dispatch(startGame());
    };

    return (
        <div>
            <button onClick={handleStartGame}>Spiel Starten</button>
        </div>
    );
};

export default GameBoard;
