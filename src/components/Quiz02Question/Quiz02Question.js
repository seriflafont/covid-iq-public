import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz02Question extends Component{
    render(){
        return(
            <div className="quiz-wrapper">
                Quiz Question 2
                <br />
                <Link to="/03">
                    <button type="button">
                        Reveal Survey Results
                    </button>
                </Link>
            </div>
        );
    }
}
export default Quiz02Question;