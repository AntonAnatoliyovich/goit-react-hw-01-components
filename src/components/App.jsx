import {Profile} from './Profile/profile'
import profile from '../components/Profile/user.json'
import {Statistics} from './Statistics/statistics';
import statistics from '../components/Statistics/data.json'

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
    </div>
  );
};
