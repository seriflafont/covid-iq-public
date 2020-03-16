import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import {TIMEOUT} from '../../constants/global';

class SignupIntro extends Component{
    constructor(props){
        super(props);
        
        this.gotoHome = this.gotoHome.bind(this);
        this.inactivityTimeout = setTimeout(this.gotoHome,TIMEOUT);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(){
        clearTimeout(this.inactivityTimeout);
        this.inactivityTimeout = setTimeout(this.gotoHome,TIMEOUT);
    }
    gotoHome(){
        this.props.history.push('/');
    }
    componentWillUnmount(){
        clearTimeout(this.inactivityTimeout);
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
            <div className="quiz-wrapper" onMouseMove={this.handleMouseMove}>
                <div className="signup-intro-wrapper">
                    <Link className="cross" to="/"><i /></Link>
                    <h1>Want to learn more?</h1>
                    <p>Pick up a copy of our Fortune Knowledge Group research teaser today.</p>
                    <p>And sign up to receive a copy of the full report, <strong>The Impact of Digital on Business Transformation</strong>, which provides exclusive insights about the digital maturity and transformation efforts of organizations around the world, as revealed through our global, cross-industry survey of 550 senior executives.</p>
                    <Link to="/signup">
                        <button type="button">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default SignupIntro;