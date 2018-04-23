import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

class Quiz01Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions:[
                {
                    copy:'Question one',
                    color:'#000'
                },
                {
                    copy:'Question two',
                    color:'#000'
                }
            ]
        };
        this.handleQuestionDeselected = this.handleQuestionDeselected.bind(this);
        this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
    }
    handleQuestionSelected(index){
        console.log(index);
    }
    handleQuestionDeselected(index){
        console.log(index);
    }
    render(){
        var scope=this;
        return(
            <div className="quiz-wrapper">
                <div className="question-wrapper">
                    <ul className="numbers-wrapper">
                        <li className="active"><div>1</div><p>Strategy</p></li>
                        <li><div>2</div><p>Disruption</p></li>
                        <li><div>3</div><p>Agility</p></li>
                    </ul>
                    <p className="question">
                    Which of the following best describes your company's digital transformation strategy?
                    </p>
                    <p className="note">Check all that apply</p>
                    <ul className="answers-wrapper">
                        {this.state.questions.map(function(obj, index){
                            return <QuizQuestion key={index} index={index} dataVo={obj} handleDeselect={scope.handleQuestionDeselected} handleSelect={scope.handleQuestionSelected} />;
                        })}
                    </ul>
                    <Link to="/02">
                        <button type="button">
                           Continue <i className="fa fa-angle-right" />
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Quiz01Question;