import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryChip from '../atoms/category-chip';

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://nc-games-sql-dentednerd.herokuapp.com/api/categories'
    }).then((response) => {
      setCategories(response.data.categories);
    });
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
