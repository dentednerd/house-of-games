import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import globalStyles from './globalStyles';
import UserProvider from './hooks/UserContext';
import {
  About,
  Categories,
  NotFound,
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
    <UserProvider>
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
