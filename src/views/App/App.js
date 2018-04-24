import React, { Component } from 'react';
import Signup from '../Signup/Signup';
import QuizIntro from '..//QuizIntro/QuizIntro';
import Quiz01Question from '../Quiz01Question/Quiz01Question';
import Quiz02Question from '../Quiz02Question/Quiz02Question';
import Quiz03Question from '../Quiz03Question/Quiz03Question';
import Question01 from '../Questions/Question01';
import Question02 from '../Questions/Question02';
import Question03 from '../Questions/Question03';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Route exact path="/" component={QuizIntro} />
              <Route exact path="/01" component={Question01} />
              <Route exact path="/02" component={Question02} />
              <Route exact path="/03" component={Question03} />
              <Route path="/signup" component={Signup} />
          </div>
      </Router>
    );
  }
}

export default App;
