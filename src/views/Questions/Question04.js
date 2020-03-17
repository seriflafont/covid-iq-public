import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question04 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'When I see toilet paper at the super market, I...',
            answers:[
                {
                    copy:'Buy it all',
                    color:'#9dd5e2',
                    points:'0',
                    correct:false
                },
                {
                    copy:'Fill up my cart',
                    color:'#7bc3d5',
                    points:'2',
                    correct:false
                },
                {
                    copy:'Buy a normal 12-pack',
                    color:'#60b2c8',
                    points:'5',
                    correct:true
                },
                {
                    copy:'Buy a roll or two',
                    color:'#4ba3bc',
                    points:'3',
                    correct:false
                }
            ],
            message:'The CDC recommends ...',
            source:'Cite source here.',
            questionpanelnumber:3,
            nextpanel:'05',
            selected:[]
        };
    }
}

export default Question04;