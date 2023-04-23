import user from 'data/user.json';
import statistic from 'data/data.json';
import friendsData from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from './Profile/Profile';
import { Container } from './Container/Container';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Container title="Task 1. Profile social network">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container title="Task 2. Statistics">
        <Statistics title="Upload stats" stats={statistic} />
        <Statistics stats={statistic} />
      </Container>

      <Container title="Task 3. FriendList">
        <FriendList friends={friendsData} />
      </Container>

      <Container title="Task 4. TransactionHistory">
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
