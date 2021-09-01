import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const StyledUserChip = styled.div`
  display: inline-flex;
  background-color: ${colors.duskypink};
  color: ${colors.white};
  height: 2rem;
  align-items: center;
  border-radius: 1rem;
  font-size: 0.75rem;
  margin-right: 0.75rem;

  img {
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
  }

  span {
    padding: 0.75rem 0.5rem;
    line-height: 1;
  }
`;

export default function UserChip({ username }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    username && axios({
      method: 'get',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/users/${username}`
    }).then((response) => {
      setUser(response.data.user);
    });
  }, [username]);

  return (
    <StyledUserChip>
      <img src={user.avatar_url} alt={user.username} />
      <span>{user.username}</span>
    </StyledUserChip>
  );
};
