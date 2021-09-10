import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '../stitches.config';
import { UpdateUser } from '../hooks/UserContext';
import { fetchUsers } from '../utils/api';
import Button from '../atoms/button';
import UserHeader from '../atoms/user-header';

function Users() {
  const [users, setUsers] = useState([]);
  const setUsername = UpdateUser();
  const history = useHistory();

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
    return;
  }, []);

  if (!users) return null;

  const logInNewUser = (username) => {
    setUsername(username);
    history.push(`/`);
    return;
  }

  const UsersGrid = styled('section', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '$default',


    div: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });

  return (
    <section className="content">
      <UsersGrid>
        {users.map((user) => (
          <div key={user.username}>
            <UserHeader user={user} />
            <Button
              text={`Log in`}
              allRound
              onClick={() => logInNewUser(user.username)}
            />
          </div>
        ))}
      </UsersGrid>
    </section>
  );
}

export default Users;
