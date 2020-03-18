import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question07 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'When I cough, I cough into...',
            answers:[
                {
                    copy:'My hand',
                    color:'#9dd5e2',
                    points:'3',
                    correct:false
                },
                {
                    copy:'My elbow',
                    color:'#7bc3d5',
                    points:'5',
                    correct:false
                },
                {
                    copy:'The wind',
                    color:'#60b2c8',
                    points:'0',
                    correct:false
                },
                {
                    copy:'A tissue',
                    color:'#60b2c8',
                    points:'0',
                    correct:true
                }
            ],
            message:'CDC advises coughing into a tissue and then throwing the tissue away.',
            sourceurl:'https://www.cdc.gov/coronavirus/2019-ncov/prepare/checklist-household-ready.html',
            source:'CDC.gov',
            questionpanelnumber:3,
            nextpanel:'08',
            selected:[]
        };
    }
}

export default Question07;