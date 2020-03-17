import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question01 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            question:'How may times a day do you currently leave your home?',
            showresults:false,
            canproceed:false,
            answers:[
                {
                    copy:'5+',
                    color:'#9dd5e2',
                    points:'17%',
                    correct:true
                },
                {
                    copy:'3-4',
                    color:'#7bc3d5',
                    points:'23%',
                    correct:false
                },
                {
                    copy:'1-2',
                    color:'#60b2c8',
                    points:'20%',
                    correct:false
                },
                {
                    copy:'0',
                    color:'#4ba3bc',
                    points:'36%',
                    correct:false
                }
            ],
            questionpanelnumber:1,
            nextpanel:'02',
            selected:[]
        };
    }
}

export default Question01;