import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz03Question extends Component{
    render(){
        return(
            <div className="quiz-wrapper">
                Quiz Question 3
                <br />
                <Link to="/signup">
                    <button type="button">
                        Get More Info
                    </button>
                </Link>
            </div>
        );
    }
}
export default Quiz03Question;