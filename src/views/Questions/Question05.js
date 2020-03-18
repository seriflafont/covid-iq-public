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
                    correct:true
                }
            ],
            message:'Because children are often asymptomatic carriers, medical professionals advise against playdates at this time.',
            source:'NPR.org',
            sourceurl:'https://www.npr.org/sections/health-shots/2020/03/17/817251610/its-time-to-get-serious-about-social-distancing-here-s-how',
            questionpanelnumber:3,
            nextpanel:'06',
            selected:[]
        };
    }
}

export default Question05;