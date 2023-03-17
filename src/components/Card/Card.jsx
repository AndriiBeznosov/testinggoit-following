import { Button } from "../Button/Button";
import {
  Wrapper,
  Container1,
  Image,
  Container2,
  Container3,
} from "./Card.styled";
import logo from "../../image/Logo.png";
import lopicture1 from "../../image/picture1.png";
import boy from "../../image/Boy2.png";

export const Card = ({ item, fn }) => {
  return (
    <Wrapper>
      <Container1 logo={logo}>
        <Image src={lopicture1} />
      </Container1>
      <Container2 avatar={item.avatar} item={boy}>
        <img src={boy} alt="Avatar" />
      </Container2>
      <Container3>
        <h1>
          <span>{item.tweets}</span> {item.user}
        </h1>
        <p>
          <span>{item.followers}</span> Followers
        </p>
        <Button onClick={() => fn(item.id)} />
      </Container3>
    </Wrapper>
  );
};
