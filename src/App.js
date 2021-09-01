import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { GlobalStyle } from './GlobalStyle';
import Categories from './templates/categories';
import Reviews from './templates/reviews';
import Users from './templates/users';
import Header from './organisms/header';
import Footer from './organisms/footer';

// TODO: create review previews for home page
// TODO: create single review with comments
// TODO: filter reviews by category? does it exist on the back end?
// TODO: styling -- Material UI? no, styled-components

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Reviews />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/category/:category">
              <Reviews />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
