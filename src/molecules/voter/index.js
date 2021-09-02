import { useState } from 'react';
import axios from 'axios';

export default function Voter({ commentId, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const vote = (vote) => {
    if (hasVoted) return;
    axios({
      method: 'patch',
      url: `https://nc-games-sql-dentednerd.herokuapp.com/api/comments/${commentId}`,
      data: {
        inc_votes: vote
      }
    }).then((response) => {
      console.log({ response });
      setVotes(votes + vote);
      setHasVoted(true);
    });
  }

  return (
    <div>
      <button onClick={() => vote(1)}>^</button>
      {votes}
      <button onClick={() => vote(-1)}>v</button>
    </div>
  );
}
