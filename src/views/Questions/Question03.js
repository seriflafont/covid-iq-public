import React, { Component } from 'react';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question03 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:true,
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
            questionpanelnumber:3,
            nextpanel:'signup',
            selected:[]
        };
    }
}

export default Question03;