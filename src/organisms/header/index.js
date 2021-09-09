import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../hooks/UserContext';
import Avatar from '../../atoms/avatar';
import Menu from '../../molecules/menu';

const StyledHeader = styled('header', {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  height: '3rem',
  width: 'calc(100% - 2rem)',
  backgroundColor: '$navy',
  padding: '1rem',
  color: '$white',


  a: {
    textDecoration: 'none',
    color: '$white'
  },

  section: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default function Header() {
  const { username, avatar_url } = GetUser();

  return (
    <StyledHeader>
      <a href="/">
        <h1>dentednerd's House of Games</h1>
      </a>
      <section>
        <Link to={`/users/${username}`}>
          <Avatar avatarUrl={avatar_url} username={username} />
        </Link>
        <Menu />
      </section>
    </StyledHeader>
  );
};
