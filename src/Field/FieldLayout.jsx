
import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css'


export const FieldLayout = ({ field, onButtonClick }) => {
    return (
 <div className={styles.fieldLayout__button}>
        {field.map((fieldItem, index) => (
        <button key={index} onClick={() => onButtonClick(index)}>
         {fieldItem}
       </button>
        ))}
        </div>
        );
  }

  FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.any).isRequired,
    onButtonClick: PropTypes.func.isRequired
  };