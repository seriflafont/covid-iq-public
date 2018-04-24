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
                    color:'#9dd5e2'
                },
                {
                    copy:'Question two',
                    color:'#7bc3d5'
                },
                {
                    copy:'Question three',
                    color:'#60b2c8'
                },
                {
                    copy:'Question four',
                    color:'#4ba3bc'
                }
            ],
            selected:[]
        };
        this.handleQuestionDeselected = this.handleQuestionDeselected.bind(this);
        this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
    }
    handleQuestionSelected(index){
        if(this.state.multi){
            if(this.state.selected.indexOf(index) === -1){ //not in selected array yet, add it
                this.setState((prevState) => ({
                    selected: prevState.selected.concat(index)
                }));
            }else{ //in selected array, remove it.
                this.handleQuestionDeselected(index);
            }
        }else{
            if(this.state.selected.indexOf(index) === -1){ //not in selected array yet, add it
                this.setState((prevState) => ({
                    selected: [index]
                }));
            }else{ //in selected array, remove it.
                this.setState((prevState) => ({
                    selected: []
                }));
            }
        }
    }
    handleQuestionDeselected(index){        
        this.setState(prevState => { // pass callback in setState to avoid race condition
            let newData = prevState.selected.slice() //copy array from prevState
            newData.splice(newData.indexOf(index), 1) // remove element
            return {selected: newData} // update state
        })
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
                            return <QuizQuestion key={index} index={index} dataVo={obj} selectedIndexes={scope.state.selected} handleDeselect={scope.handleQuestionDeselected} handleSelect={scope.handleQuestionSelected} />;
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