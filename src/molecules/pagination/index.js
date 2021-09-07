import { styled } from '../../stitches.config';

const StyledPagination = styled('section', {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledButton = styled('button', {
  width: '10ch',
  height: '2rem',
  fontFamily: '$bubblegum',
  fontSize: '$2',
  fontWeight: '700',
  backgroundColor: '$coral',
  color: '$white',
  border: 'none',
  boxShadow: '$wide',
  cursor: 'pointer',
  transition: '$all',

  '&:hover': {
    boxShadow: '$default'
  }
});

const PrevButton = styled(StyledButton, {
  borderTopLeftRadius: '1rem',
  borderBottomLeftRadius: '1rem',
  marginRight: '0.25rem'
});

const NextButton = styled(StyledButton, {
  borderTopRightRadius: '1rem',
  borderBottomRightRadius: '1rem',
  marginLeft: '0.25rem'
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
        <PrevButton
          onClick={() => handlePrev()}
        >
          Previous
        </PrevButton>
      )}
      {pageLength === 10 && (
        <NextButton
          onClick={() => handleNext()}
        >
          Next
        </NextButton>
      )}
    </StyledPagination>
  );
}