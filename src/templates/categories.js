import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategories } from '../utils/api';
import { formatTitle } from '../utils';
import CategoryChip from '../atoms/category-chip';

export default function Categories() {
  const { category } = useParams();
  console.log(category);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((categories) => setCategories(categories));
    return;
  }, []);

  // const currentCategory =

  return (
    <section>
      {categories.map((category) => (
        <>
          <h2>{formatTitle(category.slug)}</h2>
          <p>{category.description}</p>
          <CategoryChip key={category.slug} slug={category.slug} />
        </>
      ))}
    </section>
  );
}
