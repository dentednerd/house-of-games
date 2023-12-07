import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="wrapper">
      <h2>What's this then?</h2>
      <p>House of Games is a content rating and discussion website, featuring game reviews categorised by genre. Each review can be up- or down-voted, and users can comment and vote upon each review.</p>
      <p>This is a proof of concept. Users can "login" as one of a set of preset profiles, in order to leave comments and to vote on other users' reviews and comments. It isn't possible to create a new review or user profile.</p>

      <h3>How did you build the back end?</h3>
      <p>The API is an <a href="https://expressjs.com/">Express</a> server on top of a <a href="https://www.postgresql.org/">PostgreSQL</a> database, hosted on <a href="https://fly.io/">fly.io</a>.</p>
      <p><a href="https://github.com/dentednerd/nc-games-sql">Take a look at the back end repo on Github.</a></p>
      <p><a href="https://nc-games-finale.fly.dev">View the API live.</a></p>

      <h3>How did you build the front end?</h3>
      <p>The website is built in <a href="https://reactjs.org/">React</a>, as always, with an <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> approach to component creation. I took the opportunity to try out <a href="https://stitches.dev/">Stitches</a> for the styling (capsule review: it's awesome, but sadly no longer maintained). The "login" implementation uses a combination of <a href="https://react.dev/reference/react#context-hooks">React Context</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a>.</p>
      <p><a href="https://github.com/dentednerd/house-of-games">Take a look at the front end repo on Github.</a></p>
    </section>
  );
}
