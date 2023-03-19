import { List } from './ListCard.styled';
import users from '../../bd/users.json';
import { Card } from 'components/Card/Card';

export const ListCard = () => {
  return (
    <List>
      {users.map(item => {
        const { id, tweets, avatar, user, followers } = item;
        return (
          <Card
            key={id}
            tweets={tweets}
            avatar={avatar}
            user={user}
            followers={followers}
            id={id}
          />
        );
      })}
    </List>
  );
};
