import { useState, useEffect } from 'react';
import { fetchCategories } from '../utils/api';
import CategoryChip from '../atoms/category-chip';

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories()
      .then((categories) => setCategories(categories));
    return;
  }, []);

  return (
    <section className="content">
      {categories.map((category) => (
        <CategoryChip key={category.slug} slug={category.slug} />
      ))}
    </section>
  );
}

export default Categories;
