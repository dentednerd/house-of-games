import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://nc-games-sql-dentednerd.herokuapp.com/api/users'
    }).then((response) => {
      setUsers(response.data.users);
    });
  }, []);

  console.log({ users });

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
