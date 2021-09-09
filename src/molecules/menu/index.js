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

    'div.chevron': {
      width: '2rem',
      transform: isMenuOpen ? 'scaleY(-1)' : 'scaleY(1)',
      transition: 'all 0.2s',
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
      padding: '1rem',
      listStyleType: 'none',

      li: {
        marginBottom: '0.5rem',
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
