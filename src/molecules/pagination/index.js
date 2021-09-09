import { styled } from '../../stitches.config';
import Button from '../../atoms/button';

const StyledPagination = styled('section', {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center'
});

export default function Pagination({ page, setPage, pageLength }) {
  const handlePrev = () => {
    setPage((page) => {
      return page - 1;
    })
  };

  const handleNext = () => {
    setPage((page) => {
      return page + 1;
    })
  };

  return (
    <StyledPagination>
      {page > 1 && (
        <Button
          text="Previous"
          goLeft
          onClick={() => handlePrev()}
        />
      )}
      {pageLength === 10 && (
        <Button
          text="Next"
          goRight
          onClick={() => handleNext()}
        />
      )}
    </StyledPagination>
  );
}
