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
                    copy:'Buy two 12-packs',
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
            message:'As of now, Whitehouse.gov is recommending a 14 day quarantine, so you should have enough toilet paper to last 2 weeks. Of course, this is subjective, but common decency would mean not buying it all!',
            sourceurl:'https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf',
            source:'Whitehouse.gov',
            questionpanelnumber:4,
            nextpanel:'05',
            selected:[]
        };
    }
}

export default Question04;