import { RecipeList } from "./RecipeList";
import recepies from "../recepies.json";
import { UserProfile } from "./UserProfile";
import user from "../user.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      < RecipeList items={recepies} />
    </div>
  );
};
