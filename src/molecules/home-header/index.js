import Button from '../../atoms/button';
import { styled } from '../../stitches.config';

export default function HomeHeader({ setSortBy }) {
  const SortButtons = styled('section', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$default',
    marginBottom: '$large'
  });

  return (
    <header>
      <h2>What's up, gamers?</h2>
      <p>Welcome to the best fictional gaming community on the entire internet.</p>
      <SortButtons>
        <Button
          allRound
          sort
          text="Most Recent"
          onClick={() => { setSortBy('created_at') }}
        />
        <Button
          allRound
          sort
          text="Most Popular"
          onClick={() => { setSortBy('votes') }}
        />
        <Button
          allRound
          sort
          text="Most Discussed"
          onClick={() => { setSortBy('comment_count') }}
        />
      </SortButtons>
    </header>
  );
}
