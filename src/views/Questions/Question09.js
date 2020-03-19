import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question09 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'When walking past someone on the street, I keep...',
            answers:[
                {
                    copy:'at least 6 ft away from them',
                    color:'#9dd5e2',
                    points:'5',
                    correct:true
                },
                {
                    copy:'at least 4 ft away from them',
                    color:'#7bc3d5',
                    points:'3',
                    correct:false
                },
                {
                    copy:'at least 2 ft away from them',
                    color:'#60b2c8',
                    points:'3',
                    correct:false
                },
                {
                    copy:'at least 0 ft away from them',
                    color:'#60b2c8',
                    points:'0',
                    correct:false
                }
            ],
            message:'CDC advises that the virus can spread within a distance of 6ft, so it is recommended to keep at least 6 feet between yourself and others.',
            sourceurl:'https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html',
            source:'CDC.gov',
            questionpanelnumber:9,
            nextpanel:'10',
            selected:[]
        };
    }
}

export default Question09;