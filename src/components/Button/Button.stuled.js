import styled from 'styled-components';

export const Item = styled.button`
  padding: 14px 28px;
  background: ${props =>
    props.activ
      ? p => p.theme.color.buttonAction
      : p => p.theme.color.bgButton};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: none;
  width: 196px;
  height: 50px;
  color: ${p => p.theme.color.text};
  transition: transform ${p => p.theme.transition};

  &:hover {
    transform: scale(1.1);
  }
`;
