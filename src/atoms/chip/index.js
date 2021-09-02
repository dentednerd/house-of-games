import { styled } from '../../stitches.config';
import { Link } from 'react-router-dom';

export default function Chip({ to, text, img, color }) {
  const Element = to ? Link : 'div';

  const StyledChip = styled(Element, {
    display: 'inline-flex',
    color: '$white',
    height: '2rem',
    alignItems: 'center',
    borderRadius: '1rem',
    fontSize: '1rem',
    margin: '0.25rem',
    textDecoration: 'none',
    boxShadow: '0 0 0.25rem $colors$navy',

    variants: {
      color: {
        coral: {
          backgroundColor: '$coral'
        },
        purple: {
          backgroundColor: '$purple'
        },
        grey: {
          backgroundColor: '$grey'
        }
      }
    },

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
    <StyledChip to={to} color={color}>
      {img && <img src={img} alt={text} />}
      <span>{text}</span>
    </StyledChip>
  );
}
