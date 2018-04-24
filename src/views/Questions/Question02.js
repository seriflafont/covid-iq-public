import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question02 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            question:'Five years from now, what is the probability that the leader in your industry will be a digital disruptor?',
            showresults:false,
            canproceed:false,
            answers:[
                {
                    copy:'Very Likely',
                    color:'#9dd5e2',
                    percent:'25%'
                },
                {
                    copy:'Likely',
                    color:'#7bc3d5',
                    percent:'35%'
                },
                {
                    copy:'Somewhat Likely',
                    color:'#60b2c8',
                    percent:'26%'
                },
                {
                    copy:'Unlikely',
                    color:'#4ba3bc',
                    percent:'7%'
                },
                {
                    copy:'Very Unlikely',
                    color:'#3b95b1',
                    percent:'5%'
                },
                {
                    copy:'Don\'t know',
                    color:'#a4a7a9',
                    percent:'3%'
                }
            ],
            questionpanelnumber:2,
            nextpanel:'03',
            selected:[]
        };
    }
}

export default Question02;