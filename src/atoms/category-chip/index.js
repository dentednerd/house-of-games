import Chip from '../chip';
import { formatTitle } from '../../utils';

export default function CategoryChip({ slug, notLink }) {
  if (!slug) return null;

  return (
    <Chip
      to={notLink ? null : `/category/${slug}`}
      text={formatTitle(slug)}
      color="purple"
    />
  );
};
