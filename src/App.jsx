import { Wrapper } from './App.styled';
import { Card } from './components/Card/Card';
import users from './bd/users.json';

function App() {
  const toggleFriend = e => {
    console.log(e);
  };
  return (
    <Wrapper>
      {users.map(item => (
        <Card key={item.id} item={item} fn={toggleFriend} />
      ))}
    </Wrapper>
  );
}

export default App;
