import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import SignupPage from './routes/SignupPage';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={ () => <MainPage /> } />
          <Route exact path="/login" component={ () => <LoginPage /> } />
          <Route exact path="/signup" component={ () => <SignupPage /> } />
        </Switch>
      </Router>
      // <LoginPage />
  );
}

export default App;
