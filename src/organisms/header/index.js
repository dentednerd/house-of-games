import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../hooks/UserContext';
import Avatar from '../../atoms/avatar';
import Menu from '../../molecules/menu';

const StyledHeader = styled('header', {
  position: 'fixed',
  top: '0',
  height: '3rem',
  width: 'calc(100% - 2rem)',
  backgroundColor: '$navy',
  padding: '$default',
  color: '$white',

  'section.wrapper': {
    maxWidth: '800px',
    marginInline: 'auto',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$default',
  },

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
  const user = GetUser();
  if (!user) return null;

  return (
    <StyledHeader>
      <section className="wrapper">
        <Link to="/">
          <h1>House of Games</h1>
        </Link>
        <section>
          <Link to={`/users/${user.username}`}>
            <Avatar avatarUrl={user.avatar_url} username={user.username} />
          </Link>
          <Menu />
        </section>
      </section>
    </StyledHeader>
  );
};
