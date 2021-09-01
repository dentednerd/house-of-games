import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';
import { formatTitle } from '../../utils';

const StyledCategoryLink = styled(Link)`
  display: inline-flex;
  background-color: ${colors.purple};
  color: ${colors.white};
  height: 2rem;
  align-items: center;
  border-radius: 1rem;
  font-size: 0.75rem;

  span {
    padding: 0.75rem 0.5rem;
    line-height: 1;
  }
`;

export default function CategoryLink({ slug }) {
  if (!slug) return null;
  return (
    <StyledCategoryLink to={`/category/${slug}`} key={slug}>
      <span>{formatTitle(slug)}</span>
    </StyledCategoryLink>
  );
};
