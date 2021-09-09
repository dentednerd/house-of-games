import { styled } from '../../stitches.config';
import { Link } from 'react-router-dom';

export default function Chip({ to, text, img, color }) {
  const Element = to ? Link : 'div';

  const StyledChip = styled(Element, {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$white',
    borderRadius: '$corner',
    fontSize: '$1',
    lineHeight: '$1',
    textDecoration: 'none',
    boxShadow: '$default',

    variants: {
      color: {
        coral: {
          backgroundColor: '$coral'
        },
        purple: {
          backgroundColor: '$purple'
        }
      }
    },

    img: {
      height: '1.5rem',
      width: '1.5rem',
      borderRadius: '$circle'
    },

    span: {
      padding: '0 0.5rem 0.1875rem',
    }
  });

  return (
    <StyledChip to={to} color={color}>
      {img && <img src={img} alt={text} />}
      <span>{text}</span>
    </StyledChip>
  );
}
