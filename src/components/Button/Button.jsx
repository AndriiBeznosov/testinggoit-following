import { PropTypes } from 'prop-types';
import { Item } from './Button.stuled';

export const Button = ({ onClick, text, activButton }) => {
  return (
    <Item type="button" onClick={onClick} activ={activButton}>
      {text}
    </Item>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  activButton: PropTypes.bool.isRequired,
};
