import { useState } from 'react'
import './Game.css'
import { GameLayout } from './GameLayout/GameLayout'
import background from './assets/background.png'

export const Game = () => {

const [currentPlayer, setCurrentPlayer] = useState('X');
const [isGameEnded, setIsGameEnded] = useState(false);
const [isDraw, setIsDraw] = useState(false);
const [field, setField] = useState([
  '', '', '',
  '', '', '',
  '', '', '',
]);

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6] 
];

const checkGameOver = (updatedField) => {
  for (let i = 0; i < WIN_PATTERNS.length; i++) {
    const [a, b, c] = WIN_PATTERNS[i];
    if (updatedField[a] && updatedField[a] === updatedField[b] && updatedField[a] === updatedField[c]) {
      setIsGameEnded(true);
      return true;
    }
  }


  if (!updatedField.includes('')) {
    setIsDraw(true);
    return true; 
  }
  return false;
};


const handleFieldClick = (index) => {
  if(isGameEnded || field[index] !== '' ){
     return
  }
   

const updatedField = field.slice(); 
updatedField[index] = currentPlayer;
setField(updatedField); 


if (!checkGameOver(updatedField)) {
  setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
}
}

const handleResetGame = () => {
  setCurrentPlayer('X');
  setIsGameEnded(false);
  setIsDraw(false);
  setField([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);
};
  return (

  <>
  <GameLayout 
  isDraw={isDraw} 
  isGameEnded={isGameEnded} 
  currentPlayer={currentPlayer} 
  field={field} 
  onButtonClick={handleFieldClick}
  handleResetGame={handleResetGame}/>
  </>
  )
}


