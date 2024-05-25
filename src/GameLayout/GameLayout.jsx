import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import PropTypes from 'prop-types'
import styles from './GameLayout.module.css'

export const GameLayout = ({ 
    isDraw, 
    isGameEnded, 
    currentPlayer, 
    field, 
    onButtonClick,
    handleResetGame }) => {

    return (
        <>
        <div>
         <Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>   
        </div>
        <div>
         <Field field={field} onButtonClick={onButtonClick}/>   
        </div>
        <div>
        <button onClick={handleResetGame} className={styles.gameLayout__button}>Начать заново</button>
        </div>
        </>
        
    )

}

GameLayout.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
    field: PropTypes.arrayOf(PropTypes.string),
    onButtonClick: PropTypes.func,
    handleResetGame: PropTypes.func,
 }