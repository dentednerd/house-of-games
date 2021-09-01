import { styled } from '../../stitches.config';
import { Link } from 'react-router-dom';

export default function Chip({ to, color, text, img }) {
  const Element = to ? Link : 'div';

  const StyledChip = styled(Element, {
    display: 'inline-flex',
    backgroundColor: color,
    color: '$white',
    height: '2rem',
    alignItems: 'center',
    borderRadius: '1rem',
    fontSize: '1rem',
    margin: '0.25rem',
    textDecoration: 'none',
    boxShadow: '0 0 0.25rem $colors$navy',

    img: {
      height: '2rem',
      width: '2rem',
      borderRadius: '1rem'
    },

    span: {
      padding: '0.25rem 0.5rem',
      lineHeight: '1'
    }
  });

  return (
    <StyledChip to={to}>
      {img && <img src={img} alt={text} />}
      <span>{text}</span>
    </StyledChip>
  );
}
