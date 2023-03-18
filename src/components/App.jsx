import {User} from './userCard'
import userData from '../components/user.json'

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
      <User userInfo={userData} />
    </div>
  );
};
