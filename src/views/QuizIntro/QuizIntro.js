import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareButton from '../../components/ShareButton/ShareButton';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class QuizIntro extends Component{

    componentDidMount(){
       // console.log('component nmount');
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
                <ShareButton />
                <div className="intro-wrapper">
                    <i className="cross" />
                    <h1>What is your<br/>COVID-19 Prevention IQ?</h1>
                    {/* <p>"Knowing what must be done does away with fear." <br/>- Rosa Parks</p> */}
                    <p>Are you doing all that you can to slow the spread of the virus? Take this little quiz to see where you're on the ball, and where you might be able to do more.</p>
                    <Link to="/01">
                        <button type="button">
                            Take the Quiz
                        </button>
                    </Link>
                </div>
                <footer className="footer">This website is for informational purposes only. The information contained herein does not constitute medical advice, and we are not responsible for unintentional errors or ommissions. Information included was based on data from March 19, 2020. Please refer to your local goverment literature for specific information on COVID-19.</footer>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default QuizIntro;