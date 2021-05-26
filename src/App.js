import React from 'react';
import firebaseInit from './config/firebaseInit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MyPage from './pages/MyPage';
const App = () => {
  console.log(firebaseInit);

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
