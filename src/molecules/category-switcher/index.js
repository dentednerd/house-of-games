import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategories } from '../../utils/api';
import { formatTitle } from '../../utils';

export default function CategorySwitcher() {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((categories) => setCategories(categories));
    return;
  }, []);

  const currentCategory = categories.filter((cat) => cat.slug === category)[0];

  if (!currentCategory) return null;

  return (
    <section>
      <h2>{formatTitle(currentCategory.slug)}</h2>
      <p>{currentCategory.description}</p>
    </section>
  );
}
