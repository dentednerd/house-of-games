import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { formatTitle } from '../../utils';
import { fetchCategories } from '../../utils/api';
import Chevron from '../../atoms/chevron';

export default function Menu() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchCategories()
      .then((categories) => { if (isMounted) setCategories(categories) })
      .then(() => setIsLoading(false));
    return () => isMounted = false;
  }, []);

  if (isLoading) return null;

  const StyledMenu = styled('nav', {
    color: '$white',
    padding: '0 $space$default',

    'div.chevron': {
      width: '2rem',
      transform: isMenuOpen ? 'scaleY(-1)' : 'scaleY(1)',
      transition: 'all 0.2s',
      cursor: 'pointer'
    },

    ul: {
      display: isMenuOpen ? 'flex' : 'none',
      flexFlow: 'column nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '$navy',
      position: 'absolute',
      top: '5rem',
      right: '0',
      padding: '$default',
      listStyleType: 'none',

      '@media(min-width: 800px)': {
        right: 'calc(50vw - 400px)',
      },

      li: {
        fontFamily: '$bubblegum',
        fontSize: '$2',
        lineHeight: '$2',
        marginBottom: '0.5rem',

        '&.divider': {
          width: '100%',
          margin: '1rem 0'
        }
      }
    }
  });

  return (
    <StyledMenu>
      <div className="chevron" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Chevron />
      </div>
        <ul>
          {categories.map((category) => (
            <li key={category.slug} onClick={() => setIsMenuOpen(false)}>
              <Link to={`/category/${category.slug}`}>
                {formatTitle(category.slug)}
              </Link>
            </li>
          ))}
          <li className="divider">
            <hr />
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link to='/users'>
              Log out
            </Link>
          </li>
        </ul>
    </StyledMenu>
  );
}
