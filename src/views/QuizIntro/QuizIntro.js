import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/PS_icon.png';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class QuizIntro extends Component{
    render(){
        return(
            <CSSTransitionGroup
                transitionName="page-content"
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionEnter={false}
                transitionLeaveTimeout={250}
                transitionLeave={true}>
            <div key="quizintro" className="quiz-wrapper">
                <div className="intro-wrapper">
                    <i className="cross" />
                    <h1>What is your<br/>COVID IQ?</h1>
                    {/* <p>"Knowing what must be done does away with fear." <br/>- Rosa Parks</p> */}
                    <p>Are you doing all that you can to slow the spread of the virus? Take our little quiz to see where you might be able to do more, and then view the current virus statistics.</p>
                    <Link to="/01">
                        <button type="button">
                            Take the Quiz
                        </button>
                    </Link>
                </div>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default QuizIntro;