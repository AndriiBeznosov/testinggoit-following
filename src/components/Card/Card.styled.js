import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 380px;
  width: 380px;
  height: 460px;
  overflow: hidden;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin: 15px;
`;

export const Container1 = styled.div`
  position: relative;
  width: 100%;
  padding-top: 28px;
  padding-bottom: 18px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;

    background-image: url(${p => p.logo});
  }
`;

export const Container2 = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 308px;
  height: 168px;
  margin: 0 auto;
`;

export const Container3 = styled.div`
  width: 100%;
  padding-top: 62px;
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
    margin-bottom: 16px;
  }
  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
    margin-bottom: 26px;
  }
`;
