import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizAnswer from '../../components/QuizAnswer/QuizAnswer';
import QuizResult from '../../components/QuizResult/QuizResult';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import {TIMEOUT} from '../../constants/global';

class QuizQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            multi:true,
            showresults:false,
            canproceed:false,
            correctanswerchosen:false,
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
            selected:[],
            score:0,
            sourceurl:''
        };
        this.totalquestions = [1,2,3,4,5,6,7,8,9,10];
        this.gotoHome = this.gotoHome.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleAnswerDeselected = this.handleAnswerDeselected.bind(this);
        this.gotoResults = this.gotoResults.bind(this);
    }
    
    gotoHome(){
        this.props.history.push('/');
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
                    canproceed:true,
                    correctanswerchosen: prevState.answers[index].correct ? true : false,
                    score:Number(prevState.answers[index].points)
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
       // this.props.scoreHandler(this.state.score, 'add');
       console.log('quiz question gotoresults = '+this.state.score);
       this.props.scoreHandler(this.state.questionpanelnumber,this.state.score);
        
       this.setState({
            showresults:true
        });
    }

    showAnswerOptions(){
        var scope=this;
        return(
            <div key='10001' className="answer-content-wrapper clearfix">
                {/* <p className="note">{this.state.multi ? "Check all that apply" : "  "}</p> */}
                <ul className="answers-wrapper">
                    {this.state.answers.map(function(obj, index){
                        return <QuizAnswer key={index} index={index} dataVo={obj} selectedIndexes={scope.state.selected} handleSelect={scope.handleAnswerSelected} />;
                    })}
                </ul>
                {/* <span className="pagination">{this.state.questionpanelnumber} of 10</span> */}
                <button onClick={this.gotoResults} disabled={(this.state.canproceed ? false : 'disabled')} type="button" className="continue">
                    Submit <i className="fa fa-angle-right" />
                </button>
            </div>
        );
    }

    showCorrectMessage(){
        var message = "";
        if(this.state.correctanswerchosen){
            message = "Great job.";
        }else{
            message = "You might be able to do better.";
        }
        return message;
    }

    showResults(){
        var scope=this;
        return(
            <div key='1000' className="answer-content-wrapper clearfix">
                <ul className="answers-wrapper">
                    {this.state.answers.map(function(obj, index){
                        return <QuizResult key={index} index={index} dataVo={obj} selectedIndexes={scope.state.selected} />;
                    })}
                </ul>
                <p className="message">
                <strong>{this.showCorrectMessage()}</strong><br />
                {this.state.message}
                </p>
                <p className="note">Source: <a href={this.state.sourceurl} rel="noopener noreferrer" target="_blank">{this.state.source}</a></p>
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
        let scope=this;
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
            <div key={"quizquestion"+this.state.questionpanelnumber} className="quiz-wrapper" onMouseMove={this.handleMouseMove}>
                <div className="question-wrapper">
                    
                    <Link className="cross" to="/"><i /></Link>
                    <p className="question">
                    {this.state.question}
                    </p>
                    <ul className="pagination">
                        {this.totalquestions.map(function(obj, index){
                            return <li key={"pagination-"+index} className={index < scope.state.questionpanelnumber ? 'complete': ''}></li>;
                        })}
                    </ul>
                    <CSSTransitionGroup
                        transitionName="page-content"
                        transitionAppear={false}
                        transitionEnter={true}
                        transitionEnterTimeout={250}
                        transitionLeaveTimeout={250}
                        transitionLeave={false}>
                    {content}
                    </CSSTransitionGroup>
                </div>
            </div>
            </CSSTransitionGroup>
        );


    }
}
export default QuizQuestion;