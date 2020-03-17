import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/PS_icon.png';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class QuizIntro extends Component{

    componentDidMount(){
        console.log('component nmount');
        this.props.scoreHandler('reset');
    }

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
                <footer className="footer">This website is for informational purposes only. The information contained herein does not constitute medical advice, and we are not responsible for unintentional errors or ommissions. Please refer to your local goverment literature for specific information on COVID-19.</footer>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default QuizIntro;