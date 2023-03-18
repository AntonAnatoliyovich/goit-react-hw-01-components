import {Profile} from './Profile/profile'
import profile from '../components/Profile/user.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile userInfo={profile} />
    </div>
  );
};
