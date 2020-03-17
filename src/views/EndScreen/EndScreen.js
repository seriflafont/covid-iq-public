import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class EndScreen extends Component{
    constructor(props){
        super(props);
        this.gotoHome = this.gotoHome.bind(this);
    }
    
    getScore(){
        if(this.props.score > 50){
            return (
                <span className="score">
                    <h2>A+</h2>
                    <p>Always one to go above and beyond, you are committed to social distancing - with social decorum! Thanks for not hogging the toilet paper, A+!</p>
                </span>
            );
        }else if(this.props.score > 30 && this.props.score < 50){
            return (
                <span className="score">
                    <h2>B</h2>
                    <p>You're even-keeled and doing a great job doing what you can. Keep it up!</p>
                </span>
            );
        }else if(this.props.score > 20 && this.props.score < 30){
            return (
                <span className="score">
                    <h2>C</h2>
                    <p>You're making progress but could probably make some tweaks to your routine. Please refer to the CDC website as well as the WHO for more tips on how you might be able to improve.</p>
                </span>
            );
        }else if(this.props.score < 20){
            return (
                <span className="score">
                    <h2>D</h2>
                    <p>Unfortunately, there are many areas where you could improve, though sometimes it is difficult based on your own personal situation. If you can modify some of your habits to match what is recommended by the CDC and WHO, everyone will benefit.</p>
                </span>
            );
        }
    }

    gotoHome(){
        this.props.history.push('/');
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
                <div className="endscreen-wrapper">
                    <Link className="cross" to="/"><i /></Link>
                    <h1>How'd you score?</h1>
                    {this.getScore()}
                    <h1>Resources</h1>
                    <p>Message</p>
                    <Link to="/stats">
                        <button type="button">
                            View Current COVID-19 Stats
                        </button>
                    </Link>
                </div>
            </div>
            </CSSTransitionGroup>
        );
    }
}
export default EndScreen;