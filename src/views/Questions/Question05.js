import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question05 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'If you have children, what frequency are they visiting other children?',
            answers:[
                {
                    copy:'Every day',
                    color:'#9dd5e2',
                    points:'0',
                    correct:false
                },
                {
                    copy:'Maybe once a week',
                    color:'#7bc3d5',
                    points:'1',
                    correct:false
                },
                {
                    copy:'Once a month',
                    color:'#60b2c8',
                    points:'3',
                    correct:false
                },
                {
                    copy:'Never at the moment',
                    color:'#4ba3bc',
                    points:'5',
                    correct:true
                },
                {
                    copy:'I don\'t have children',
                    color:'#4ba3bc',
                    points:'5',
                    correct:false
                }
            ],
            message:'The CDC recommends ...',
            source:'Cite source here.',
            questionpanelnumber:3,
            nextpanel:'06',
            selected:[]
        };
    }
}

export default Question05;