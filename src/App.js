import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import globalStyles from './globalStyles';
import Categories from './templates/categories';
import Reviews from './templates/reviews';
import Review from './templates/review';
import Users from './templates/users';
import UserProfile from './templates/user-profile';
import Header from './organisms/header';
import Footer from './organisms/footer';

function App() {
  globalStyles();

  return (
    <>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Reviews />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route path="/category/:category">
              <Reviews />
            </Route>
            <Route path="/review/:id">
              <Review />
            </Route>
            <Route path="/users/:username">
              <UserProfile />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
