import { Link } from 'react-router-dom';
import { formatTitle } from '../../utils';

export default function CategoryLink({ category }) {
  return (
    <Link to={`/category/${category.slug}`} key={category.slug}>
      <h2>{formatTitle(category.slug)}</h2>
    </Link>
  );
};
