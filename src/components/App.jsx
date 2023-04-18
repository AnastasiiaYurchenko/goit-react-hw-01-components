import { RecipeList } from './RecipeList/RecipeList';
import recepies from '../recepies.json';
import { UserProfile } from './UserProfile/UserProfile';
import user from '../user.json';
import { FriendList } from './FriendList/FriendList';
import friendlist from '../friends.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout
    // style={{
    //   height: '100vh',
    //   // display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />

      <FriendList friends={friendlist} />

      <TransactionHistory items={transactions} />

      {/* <RecipeList items={recepies} /> */}

      <GlobalStyle />
    </Layout>
  );
};
