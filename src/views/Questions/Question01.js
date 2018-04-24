import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question01 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:true,
            question:'Which of the following best describes your company\'s digital transformation strategy?',
            showresults:false,
            canproceed:false,
            answers:[
                {
                    copy:'Transforming an existing line of business',
                    color:'#9dd5e2',
                    percent:'17%'
                },
                {
                    copy:'Building a new digital business',
                    color:'#7bc3d5',
                    percent:'23%'
                },
                {
                    copy:'Launching a new line of business enabled by digital',
                    color:'#60b2c8',
                    percent:'20%'
                },
                {
                    copy:'Transforming multiple existing lines of business simultaneously',
                    color:'#4ba3bc',
                    percent:'36%'
                },
                {
                    copy:'Launching multiple new lines of business enabled by digital',
                    color:'#3b95b1',
                    percent:'34%'
                },
                {
                    copy:'Already a fully digital enterprise with digital at the core',
                    color:'#2e88a7',
                    percent:'6%'
                },
                {
                    copy:'Don\'t know / Not applicable',
                    color:'#a4a7a9',
                    percent:'1%'
                }
            ],
            questionpanelnumber:1,
            nextpanel:'02',
            selected:[]
        };
    }
}

export default Question01;