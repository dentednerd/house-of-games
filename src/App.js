import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Categories from './templates/categories';
import Reviews from './templates/reviews';

function App() {
  return (
    <main>
      <Router>
        <Switch>
        <Route exact path="/">
            <Reviews />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
