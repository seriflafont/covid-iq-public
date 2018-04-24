import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupIntro extends Component{
    render(){
        return(
            <div className="quiz-wrapper">
                <div className="signup-intro-wrapper">
                    <h1>Want to learn more?</h1>
                    <p>Pick up a copy of our Fortune Knowledge Group research teaser today.</p>
                    <p>And sign up to receive a copy of the full report, <strong>The Impact of Digital on Business Transformation</strong>, which provides exclusive insights about the digital maturity and transformation efforts of organizations around the world, as revealed through our global, cross-industry survey of 550 senior executives.</p>
                    <Link to="/signup">
                        <button type="button">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default SignupIntro;