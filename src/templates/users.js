import { useState, useEffect } from 'react';
import { fetchUsers } from '../utils/api';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
    return;
  }, []);

  if (!users) return null;

  return (
    <section className="content">
      {users.map((user) => (
        <div key={user.username}>
          <img src={user.avatar_url} alt={user.username} />
          <p>{user.username} {user.name}</p>
        </div>
      ))}
    </section>
  );
}

export default Users;
