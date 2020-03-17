import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question10 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'I\'m feeling sick, so I will probably go...',
            answers:[
                {
                    copy:'Nowhere. I\'m staying home!',
                    color:'#9dd5e2',
                    points:'5',
                    correct:true
                },
                {
                    copy:'I\'ll just go to get groceries when needed.',
                    color:'#7bc3d5',
                    points:'3',
                    correct:false
                },
                {
                    copy:'To work.',
                    color:'#60b2c8',
                    points:'3',
                    correct:false
                },
                {
                    copy:'To get some coffee or tea.',
                    color:'#60b2c8',
                    points:'0',
                    correct:false
                }
            ],
            message:'The CDC recommends ...',
            source:'Cite source here.',
            questionpanelnumber:3,
            nextpanel:'results',
            selected:[]
        };
    }
}

export default Question10;