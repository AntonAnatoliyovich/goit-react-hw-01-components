import {Profile} from './Profile/profile'
import profile from '../components/Profile/user.json'
import {Statistics} from './Statistics/statistics';
import statistics from '../components/Statistics/data.json'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile userInfo={profile} />
      <Statistics statisticsInfo={statistics} />
    </div>
  );
};
