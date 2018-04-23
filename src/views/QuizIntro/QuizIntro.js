import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/PS_icon.png';

class QuizIntro extends Component{
    render(){
        return(
            <div className="quiz-wrapper">
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
        );
    }
}
export default QuizIntro;