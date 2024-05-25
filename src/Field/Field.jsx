import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types';

export const Field = ({ field, onButtonClick }) => {
    return(
        
        <>
        <FieldLayout field={field} onButtonClick={onButtonClick} />
       
        </>
    )
}

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.any).isRequired,
    onButtonClick: PropTypes.func.isRequired
  };