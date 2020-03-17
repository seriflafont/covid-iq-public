import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question03 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'I currently have enough groceries to last me...',
            answers:[
                {
                    copy:'2 months',
                    color:'#9dd5e2',
                    points:'1',
                    correct:false
                },
                {
                    copy:'1 month',
                    color:'#7bc3d5',
                    points:'3',
                    correct:true
                },
                {
                    copy:'2 weeks',
                    color:'#60b2c8',
                    points:'5',
                    correct:false
                },
                {
                    copy:'A few days',
                    color:'#4ba3bc',
                    points:'0',
                    correct:false
                }
            ],
            message:'The CDC recommends ...',
            source:'Cite source here.',
            questionpanelnumber:3,
            nextpanel:'04',
            selected:[]
        };
    }
}

export default Question03;