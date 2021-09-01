import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryLink from '../atoms/category-link';

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
    <main>
      {categories.map((category) => (
        <CategoryLink key={category.slug} slug={category.slug} />
      ))}
    </main>
  );
}

export default Categories;
