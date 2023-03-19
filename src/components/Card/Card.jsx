import { Button } from '../Button/Button';
import { Container1, Image, Container2, Container3, Item } from './Card.styled';
import logo from '../../image/Logo.png';
import lopicture1 from '../../image/picture1.png';
import { useState } from 'react';
import { load, remove, save } from 'utils/storage';

const FOLLOW = 'Follow';
const FOLLOWING = 'Following';

export const Card = ({ tweets, user, avatar, followers, id }) => {
  const storage = load(id);
  const [numberFollowers, setFollowers] = useState(storage ?? followers);
  const [textButton, settextButton] = useState(Boolean(storage));

  const str = storage ?? numberFollowers;
  const num = parseInt(str).toLocaleString('uk-UA');
  const formattedNum = num.replace(/\s/g, ',');

  const toggleFriend = e => {
    settextButton(!textButton);
    if (!textButton) {
      setFollowers(prevState => {
        const data = prevState + 1;
        save(id, data);
        return data;
      });

      return;
    }
    setFollowers(prevState => prevState - 1);
    remove(id);
  };

  return (
    <Item>
      <Container1 logo={logo}>
        <Image src={lopicture1} />
      </Container1>
      <Container2>
        <img src={require(`../../image/${avatar}`)} alt={user} />
      </Container2>
      <Container3>
        <h1>
          <span>{tweets}</span> {user}
        </h1>
        <p>
          <span>{formattedNum}</span> Followers
        </p>
        <Button
          text={textButton ? FOLLOWING : FOLLOW}
          onClick={() => toggleFriend(id)}
          activButton={textButton}
        />
      </Container3>
    </Item>
  );
};
