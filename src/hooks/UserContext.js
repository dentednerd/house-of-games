import {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";
import { fetchUserByUsername } from '../utils/api';

const UserContext = createContext();
const UpdateUserContext = createContext();

export function GetUser() {
  return useContext(UserContext);
}

export function UpdateUser() {
  return useContext(UpdateUserContext);
}

export default function UserProvider({ children }) {
  const firstUser = window.localStorage.getItem('house-of-games-current-user') || 'happyamy2016';
  const [username, setUsername] = useState(firstUser);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    fetchUserByUsername(username)
      .then((user) => {
        setLoggedInUser(user);
        window.localStorage.setItem('house-of-games-current-user', username);
      });
  }, [username])

  return (
    <UserContext.Provider value={loggedInUser}>
      <UpdateUserContext.Provider value={setUsername}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
};
