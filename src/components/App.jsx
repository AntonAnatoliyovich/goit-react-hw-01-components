import {Profile} from './Profile/profile';
import profile from './Profile/user.json';
import {Statistics} from './Statistics/statistics';
import statistics from './Statistics/data.json';
import { FriendList } from './FriendList/friendList';
import friendsData from './FriendList/friends.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
import transactionsData from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile userInfo={profile} />
      <Statistics stats={statistics} title='Upload stats' />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
