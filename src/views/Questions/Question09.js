import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question09 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'When walking past someone on the street, following the rules of social distancing, it\'s safe to walk...',
            answers:[
                {
                    copy:'6ft from them',
                    color:'#9dd5e2',
                    points:'5',
                    correct:true
                },
                {
                    copy:'4ft from them',
                    color:'#7bc3d5',
                    points:'3',
                    correct:false
                },
                {
                    copy:'2ft from them',
                    color:'#60b2c8',
                    points:'3',
                    correct:false
                },
                {
                    copy:'0ft from them',
                    color:'#60b2c8',
                    points:'0',
                    correct:false
                }
            ],
            message:'The CDC recommends ...',
            source:'Cite source here.',
            questionpanelnumber:3,
            nextpanel:'10',
            selected:[]
        };
    }
}

export default Question09;