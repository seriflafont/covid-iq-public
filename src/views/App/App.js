import React, { Component } from 'react';
import Signup from '../Signup/Signup';
import QuizIntro from '..//QuizIntro/QuizIntro';
import Question01 from '../Questions/Question01';
import Question02 from '../Questions/Question02';
import Question03 from '../Questions/Question03';
import SignupIntro from '../SignupIntro/SignupIntro';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Route exact path="/" component={QuizIntro} />
              <Route exact path="/01" component={Question01} />
              <Route exact path="/02" component={Question02} />
              <Route exact path="/03" component={Question03} />
              <Route path="/signupintro" component={SignupIntro} />
              <Route path="/signup" component={Signup} />
              <Route path="/admin" component={Admin} />
          </div>
      </Router>
    );
  }
}

export default App;
