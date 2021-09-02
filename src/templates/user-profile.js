import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { styled } from '../stitches.config';
import { fetchUserByUsername } from '../utils/api';

export default function UserProfile() {
  let { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserByUsername(username)
      .then((user) => setUser(user));
    return;
  }, [username]);

  if (!user) return null;

  const UserHeader = styled('section', {
    display: 'grid',
    gridTemplateColumns: '3.5rem auto',
    columnGap: '1rem',

    'div.avatar': {
      img: {
        height: '3.5rem',
        width: '3.5rem',
        borderRadius: '50%'
      }
    }
  });

  return (
    <section className="content">
      <UserHeader>
        <div className="avatar">
          <img src={user.avatar_url} alt={user.name} />
        </div>
        <div>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
        </div>
      </UserHeader>
    </section>
  );
}
