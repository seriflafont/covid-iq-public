import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizAnswer from '../../components/QuizAnswer/QuizAnswer';
import QuizResult from '../../components/QuizResult/QuizResult';
import logo from '../../images/PS_icon.png';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

class Quiz01Question extends Component{
    constructor(props){
        super(props);
        this.state = {
            multi:true,
            showresults:false,
            canproceed:false,
            question:'Which of the following best describes your company\'s digital transformation strategy?',
            answers:[
                {
                    copy:'Question one',
                    color:'#9dd5e2',
                    percent:'17%'
                },
                {
                    copy:'Question two',
                    color:'#7bc3d5',
                    percent:'23%'
                },
                {
                    copy:'Question three',
                    color:'#60b2c8',
                    percent:'20%'
                },
                {
                    copy:'Question four',
                    color:'#4ba3bc',
                    percent:'36%'
                }
            ],
            questionpanelnumber:1,
            nextpanel:'02',
            selected:[]
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleAnswerDeselected = this.handleAnswerDeselected.bind(this);
        this.gotoResults = this.gotoResults.bind(this);
    }
    handleAnswerSelected(index){
        if(this.state.multi){
            if(this.state.selected.indexOf(index) === -1){ //not in selected array yet, add it
                this.setState((prevState) => ({
                    selected: prevState.selected.concat(index),
                    canproceed:true
                }));
            }else{ //in selected array, remove it.
                this.handleAnswerDeselected(index);
            }
        }else{
            if(this.state.selected.indexOf(index) === -1){ //not in selected array yet, add it
                this.setState((prevState) => ({
                    selected: [index],
                    canproceed:true
                }));
            }else{ //in selected array, remove it.
                this.setState((prevState) => ({
                    selected: [],
                    canproceed:false
                }));
            }
        }
    }
    handleAnswerDeselected(index){        
        this.setState(prevState => { // pass callback in setState to avoid race condition
            let newData = prevState.selected.slice() //copy array from prevState
            newData.splice(newData.indexOf(index), 1) // remove element
            return {selected: newData} // update state
        },()=>{this.setState({canproceed:(this.state.selected.length > 0)});})
    }

    gotoResults(){
        this.setState({
            showresults:true
        })
    }

    showAnswerOptions(){
        var scope=this;
        return(
            <div key='10001' className="answer-content-wrapper clearfix">
                <p className="note">{this.state.multi ? "Check all that apply" : "  "}</p>
                <ul className="answers-wrapper">
                    {this.state.answers.map(function(obj, index){
                        return <QuizAnswer key={index} index={index} dataVo={obj} selectedIndexes={scope.state.selected} handleSelect={scope.handleAnswerSelected} />;
                    })}
                </ul>
                <button onClick={this.gotoResults} disabled={(this.state.canproceed ? false : 'disabled')} type="button" className="continue">
                    Continue <i className="fa fa-angle-right" />
                </button>
            </div>
        );
    }

    showResults(){
        var scope=this;
        return(
            <div key='1000' className="answer-content-wrapper clearfix">
                <p className="note">Results from our Survey of 550 Executives</p>
                <ul className="answers-wrapper">
                    {this.state.answers.map(function(obj, index){
                        return <QuizResult key={index} index={index} dataVo={obj} selectedIndexes={scope.state.selected} />;
                    })}
                </ul>
                <Link to={this.state.nextpanel}>
                    <button className="continue" type="button">
                        Continue <i className="fa fa-angle-right" />
                    </button>
                </Link>
            </div>
        );
    }


    render(){
        let content;
        if(!this.state.showresults){
            content = this.showAnswerOptions();
        }else{
            content = this.showResults();
        }
        return(
            <CSSTransitionGroup
                transitionName="page-content"
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionEnter={false}
                transitionLeaveTimeout={250}
                transitionLeave={true}>
            <div key={"quizquestion"+this.state.questionpanelnumber} className="quiz-wrapper">
                <div className="question-wrapper">
                    <ul className="numbers-wrapper">
                        <li className={(this.state.questionpanelnumber === 1 ? "active" : "")}><div>1</div><p>Strategy</p></li>
                        <li className={(this.state.questionpanelnumber === 2 ? "active" : "")}><div>2</div><p>Disruption</p></li>
                        <li className={(this.state.questionpanelnumber === 3 ? "active" : "")}><div>3</div><p>Agility</p></li>
                    </ul>
                    <p className="question">
                    {this.state.question}
                    </p>
                    <CSSTransitionGroup
                        transitionName="page-content"
                        transitionAppear={false}
                        transitionEnter={true}
                        transitionEnterTimeout={250}
                        transitionLeaveTimeout={250}
                        transitionLeave={false}>
                    {content}
                    </CSSTransitionGroup>
                    <Link to="/"><img src={logo} className="ps-logo" alt="logo" /></Link>
                </div>
            </div>
            </CSSTransitionGroup>
        );


    }
}
export default Quiz01Question;