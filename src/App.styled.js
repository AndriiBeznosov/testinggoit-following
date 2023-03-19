import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.color.mainBgColor};
`;
