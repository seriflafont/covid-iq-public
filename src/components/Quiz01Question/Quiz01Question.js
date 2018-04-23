import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz01Question extends Component{
    render(){
        return(
            <div className="quiz-wrapper">
                Quiz Question 1
                <br />
                <Link to="/02">
                    <button type="button">
                        Reveal Survey Results
                    </button>
                </Link>
            </div>
        );
    }
}
export default Quiz01Question;