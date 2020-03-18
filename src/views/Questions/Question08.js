import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question08 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'I always wash my hands...',
            answers:[
                {
                    copy:'After I\'ve been outside.',
                    color:'#9dd5e2',
                    points:'3',
                    correct:false
                },
                {
                    copy:'Before I eat.',
                    color:'#7bc3d5',
                    points:'3',
                    correct:false
                },
                {
                    copy:'Pretty much all the time.',
                    color:'#60b2c8',
                    points:'3',
                    correct:false
                },
                {
                    copy:'All of the above.',
                    color:'#60b2c8',
                    points:'5',
                    correct:true
                },
                {
                    copy:'None of the above.',
                    color:'#60b2c8',
                    points:'0',
                    correct:false
                }
            ],
            message:'CDC advises washing hands frequently. Wash with soap and water for at least 20 seconds. The more the better!',
            sourceurl:'https://www.cdc.gov/coronavirus/2019-ncov/prepare/checklist-household-ready.html',
            source:'CDC.gov',
            questionpanelnumber:3,
            nextpanel:'09',
            selected:[]
        };
    }
}

export default Question08;