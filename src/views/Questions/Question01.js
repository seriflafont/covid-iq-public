import React, { Component } from 'react';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question01 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:true,
            question:'Which of the following best describes your company\'s digital transformation strategy?',
            showresults:false,
            canproceed:false,
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
    }
}

export default Question01;