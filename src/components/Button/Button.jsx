import { Item } from './Button.stuled';

export const Button = ({ onClick, text, activButton }) => {
  return (
    <Item type="button" onClick={onClick} activ={activButton}>
      {text}
    </Item>
  );
};
