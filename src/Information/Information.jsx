import { InformationLayout } from './InformationLayout'
import PropTypes from 'prop-types';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
    return (
      <InformationLayout
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
    );
  }
  


Information.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
  };