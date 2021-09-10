import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="content">
      <h2>What's this then?</h2>
      <p>dentednerd's House of Games is a content rating and discussion website, featuring game reviews categorised by genre. Each review can be up- or down-voted, and users can comment and vote upon each review. This project is created from a sprint on the <a href="https://www.northcoders.com">Northcoders</a> bootcamp.</p>

      <h3>How did you build the back end?</h3>
      <p>The API is an <a href="https://expressjs.com/">Express</a> server on top of a <a href="https://www.postgresql.org/">PostgreSQL</a> database, hosted on <a href="https://www.heroku.com">Heroku</a>.</p>
      <p><a href="https://nc-games-sql-dentednerd.herokuapp.com/api">Take a look at the back end repo on Github.</a></p>

      <h3>How did you build the front end?</h3>
      <p>The website is built in <a href="https://reactjs.org/">React</a>, as always, with an <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> approach to component creation. I took the opportunity to try out <a href="https://stitches.dev/">Stitches</a> for the styling (capsule review: it's awesome, fully recommend). The "login" implementation uses a combination of <a href="https://reactjs.org/docs/context.html">React Context</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a>.</p>
      <p><a href="https://github.com/dentednerd/house-of-games">Take a look at the front end repo on Github.</a></p>

      <h3>But Joey, all your commits in these repos are dated 2021, and you graduated from Northcoders in 2017. What gives?</h3>
      <p>I'm a mentor at Northcoders these days. I took this project on in order to get some practice with SQL and hooks. In my day, <a href="https://www.joeyimlay.dev/posts/northcoders-news-revisited/">this sprint</a> was built with a MongoDB database, and Redux on the front end, because hooks weren't a thing in React yet. (Praise be to the React gods for hooks. Praise.)</p>
    </section>
  );
}
