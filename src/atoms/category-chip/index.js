import Chip from '../chip';
import { formatTitle } from '../../utils';

export default function CategoryChip({ slug }) {
  if (!slug) return null;
  return (
    <Chip
      to={`/category/${slug}`}
      text={formatTitle(slug)}
      color="purple"
    />
  );
};
