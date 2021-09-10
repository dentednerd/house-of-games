import { styled } from '../../stitches.config';

export default function UserHeader({ user }) {
  const StyledUserHeader = styled('section', {
    display: 'grid',
    gridTemplateColumns: '3.5rem auto',
    columnGap: '$default',
    marginBottom: '$default',

    'section.avatar': {
      img: {
        height: '3.5rem',
        width: '3.5rem',
        borderRadius: '$circle',
        boxShadow: '$default'
      },
    }
  });

  return (
    <StyledUserHeader>
      <section className="avatar">
        <img src={user.avatar_url} alt={user.name} />
      </section>
      <section>
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
      </section>
    </StyledUserHeader>
  )
}
