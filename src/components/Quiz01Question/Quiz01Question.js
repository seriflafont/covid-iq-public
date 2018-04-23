import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz01Question extends Component{
    render(){
        return(
            <div className="quiz-wrapper">
                <div className="question-wrapper">
                    <ul className="numbers-wrapper">
                        <li className="active"><div>1</div><p>Strategy</p></li>
                        <li><div>2</div><p>Disruption</p></li>
                        <li><div>3</div><p>Agility</p></li>
                    </ul>
                    
                    Quiz Question 1
                    <br />
                    <Link to="/02">
                        <button type="button">
                            Reveal Survey Results
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Quiz01Question;