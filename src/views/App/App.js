import React, { Component } from 'react';
import Signup from '../Signup/Signup';
import QuizIntro from '..//QuizIntro/QuizIntro';
import Quiz01Question from '../Quiz01Question/Quiz01Question';
import Quiz02Question from '../Quiz02Question/Quiz02Question';
import Quiz03Question from '../Quiz03Question/Quiz03Question';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Route exact path="/" component={QuizIntro} />
              <Route exact path="/01" component={Quiz01Question} />
              <Route exact path="/02" component={Quiz02Question} />
              <Route exact path="/03" component={Quiz03Question} />
              <Route path="/signup" component={Signup} />
          </div>
      </Router>
    );
  }
}

export default App;
