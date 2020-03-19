import React, { Component } from 'react';
//import Signup from '../Signup/Signup';
import QuizIntro from '..//QuizIntro/QuizIntro';
import Question01 from '../Questions/Question01';
import Question02 from '../Questions/Question02';
import Question03 from '../Questions/Question03';
import Question04 from '../Questions/Question04';
import Question05 from '../Questions/Question05';
import Question06 from '../Questions/Question06';
import Question07 from '../Questions/Question07';
import Question08 from '../Questions/Question08';
import Question09 from '../Questions/Question09';
import Question10 from '../Questions/Question10';
import EndScreen from '../EndScreen/EndScreen';
import StatsScreen from '../EndScreen/StatsScreen';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
      scorearray:Array.from({length: 11}, (v) => 0)
    }
    this.handleScoreUpdate = this.compileScore.bind(this);
  }
  compileScore(index,score){
    if(index === 'reset'){
      this.setState({
        scorearray:Array.from({length: 11}, (v) => 0),
        score:0
      });
    }else{
      this.setState(prevState => { // pass callback in setState to avoid race condition
        let newData = prevState.scorearray.slice() //copy array from prevState
        newData.splice(index, 1, score) // remove old element, replace with new.
        return {scorearray: newData} // update state
      },()=>{
       // console.log(this.state.scorearray);
        this.state.score = this.state.scorearray.reduce((p,c)=>{
          return p+c;
        }, 0);
        //console.log(this.state.score);
      })
    }
  }


  render() {
    return (
      <Router>
          <div className="App">
              {/* <Route exact path="/" component={QuizIntro} /> */}
              <Route
                exact path='/'
                render={(props) => <QuizIntro {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/01'
                render={(props) => <Question01 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/02'
                render={(props) => <Question02 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/03'
                render={(props) => <Question03 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/04'
                render={(props) => <Question04 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/05'
                render={(props) => <Question05 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/06'
                render={(props) => <Question06 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/07'
                render={(props) => <Question07 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/08'
                render={(props) => <Question08 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/09'
                render={(props) => <Question09 {...props} scoreHandler={this.handleScoreUpdate} />}
              />
              <Route
                exact path='/10'
                render={(props) => <Question10 {...props} scoreHandler={this.handleScoreUpdate} />}
              />

              {/* <Route exact path="/02" component={Question02} />
              <Route exact path="/03" component={Question03} />
              <Route exact path="/04" component={Question04} />
              <Route exact path="/05" component={Question05} />
              <Route exact path="/06" component={Question06} />
              <Route exact path="/07" component={Question07} />
              <Route exact path="/08" component={Question08} />
              <Route exact path="/09" component={Question09} />
              <Route exact path="/10" component={Question10} /> */}

              <Route
                path='/results'
                render={(props) => <EndScreen {...props} score={this.state.score} />}
              />
              {/* <Route path="/results" component={EndScreen} /> */}
              <Route path="/stats" component={StatsScreen} />

              <Route path="/admin" component={Admin} />
          </div>
      </Router>
    );
  }
}

export default App;
