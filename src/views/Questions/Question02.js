import React, { Component } from 'react';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question02 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            question:'Five years from now, what is the probability that the leader in your industry will be a digital disruptor?',
            showresults:false,
            canproceed:false,
            answers:[
                {
                    copy:'Question ONNNNNE',
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
            questionpanelnumber:2,
            nextpanel:'03',
            selected:[]
        };
    }
}

export default Question02;