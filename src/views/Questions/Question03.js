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
                    correct:false
                },
                {
                    copy:'2 weeks',
                    color:'#60b2c8',
                    points:'5',
                    correct:true
                },
                {
                    copy:'A few days',
                    color:'#4ba3bc',
                    points:'0',
                    correct:false
                }
            ],
            message:'If you have more than 2 weeks, that\'s great, but as of now, Whitehouse.gov is recommending a 14 day quarantine, so you should have enough supplies to last 2 weeks.',
            sourceurl:'https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf',
            source:'Whitehouse.gov',
            questionpanelnumber:3,
            nextpanel:'04',
            selected:[]
        };
    }
}

export default Question03;