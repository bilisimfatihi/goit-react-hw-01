import Profile from './components/profile/profile'
import FriendList from './components/friendList/friendList'
import TransactionHistory from './components/transactionHistory/transactionHistory';

import userData from "../src/userData.json";
import friends from "../src/friends.json";
import transactions from "../src/transactions.json";

import './App.css'


const App = () => {

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
