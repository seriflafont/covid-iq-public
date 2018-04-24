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
                    copy:'Under 1 Year',
                    color:'#9dd5e2',
                    percent:'16%'
                },
                {
                    copy:'1-2 Years',
                    color:'#7bc3d5',
                    percent:'39%'
                },
                {
                    copy:'2-3 Years',
                    color:'#60b2c8',
                    percent:'33%'
                },
                {
                    copy:'3-5 Years',
                    color:'#4ba3bc',
                    percent:'9%'
                },
                {
                    copy:'More than 5 Years',
                    color:'#3b95b1',
                    percent:'1%'
                },
                {
                    copy:'Don\'t know',
                    color:'#a4a7a9',
                    percent:'1%'
                }
            ],
            questionpanelnumber:3,
            nextpanel:'signupintro',
            selected:[]
        };
    }
}

export default Question03;