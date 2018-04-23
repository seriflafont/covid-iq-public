import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

class Quiz01Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            multi:true,
            questions:[
                {
                    copy:'Question one',
                    color:'#000'
                },
                {
                    copy:'Question two',
                    color:'#000'
                }
            ],
            selected:[]
        };
        this.handleQuestionDeselected = this.handleQuestionDeselected.bind(this);
        this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
    }
    handleQuestionSelected(index){
        console.log('handleQuestionSelected');
        this.setState((prevState) => ({
            selected: prevState.selected.concat(index)
        }));
    }
    handleQuestionDeselected(index){
        console.log('handleQuestionDeselected');
        //NOT WORKING RIGHT.
        this.setState((prevState) => ({
            selected: prevState.selected.splice(prevState.selected.indexOf(index),1)
        }));
        // var selectedAnswers = this.state.selected;
        // var newSelAnswers = selectedAnswers.splice(selectedAnswers.indexOf(index),1);
        //console.log(newSelAnswers);
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