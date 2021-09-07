import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import globalStyles from './globalStyles';
import {
  Categories,
  Reviews,
  Review,
  Users,
  UserProfile
} from './templates';
import Header from './organisms/header';
import Footer from './organisms/footer';

function App() {
  globalStyles();

  return (
    <Router>
      <Header />
      <main>
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
      </main>
      <Footer />
    </Router>
  );
}

export default App;
