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
                    points:'0',
                    correct:false
                },
                {
                    copy:'3-4',
                    color:'#7bc3d5',
                    points:'3',
                    correct:false
                },
                {
                    copy:'1-2',
                    color:'#60b2c8',
                    points:'4',
                    correct:false
                },
                {
                    copy:'0',
                    color:'#4ba3bc',
                    points:'5',
                    correct:true
                }
            ],
            message:'The Whitehouse guidelines for preventing the spread of COVID-19 include avoiding discretionary travel and staying home.',
            sourceurl:'https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf',
            source:'Whitehouse.gov',
            questionpanelnumber:1,
            nextpanel:'02',
            selected:[]
        };
    }
}

export default Question01;