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
                    <img src={logo} className="ps-logo" alt="logo" />
                    <h1><strong>HOW</strong> is your business transforming?</h1>
                    <p>Compare your approach against 550 senior executives at leading organizations.</p>
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