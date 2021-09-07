import { useState, useEffect } from 'react';
import { styled } from '../../stitches.config';
import { fetchCategories } from '../../utils/api';
import Chevron from '../../atoms/chevron';
import CategoryChip from '../../atoms/category-chip';

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
    padding: '0 1rem',

    '@bp1': {
      padding: '0'
    },

    'div.chevron': {
      width: '2rem',
      transform: isMenuOpen ? 'scaleY(-1)' : 'scaleY(1)',
      transition: 'all 0.2s',

      '@bp1': {
        display: 'none'
      }
    },

    ul: {
      display: isMenuOpen ? 'block' : 'none',
      backgroundColor: '$navy',
      position: 'absolute',
      top: '5rem',
      right: '0',
      padding: '1rem',
      listStyleType: 'none',

      '@bp1': {
        display: 'block',
        position: 'relative',
        top: '0',
        right: '0'
      },

      li: {
        marginBottom: '0.5rem',

        '@bp1': {
          display: 'inline-block',
          marginBottom: 0,
          marginLeft: '0.5rem'
        }
      }
    }
  });

  return (
    <StyledMenu>
      <div className="chevron" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Chevron />
      </div>
      <ul >
        {categories.map((category) => (
          <li key={category.slug} onClick={() => setIsMenuOpen(false)}>
            <CategoryChip slug={category.slug} />
          </li>
        ))}
      </ul>
    </StyledMenu>
  )
}
