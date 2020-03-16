import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question01 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            question:'COVID-19 virus is spread by air, ie., it is an airborne virus.',
            showresults:false,
            canproceed:false,
            answers:[
                {
                    copy:'True',
                    color:'#9dd5e2',
                    percent:'17%',
                    correct:true
                },
                // {
                //     copy:'Building a new digital business',
                //     color:'#7bc3d5',
                //     percent:'23%'
                // },
                // {
                //     copy:'Launching a new line of business enabled by digital',
                //     color:'#60b2c8',
                //     percent:'20%'
                // },
                // {
                //     copy:'Transforming multiple existing lines of business simultaneously',
                //     color:'#4ba3bc',
                //     percent:'36%'
                // },
                // {
                //     copy:'Launching multiple new lines of business enabled by digital',
                //     color:'#3b95b1',
                //     percent:'34%'
                // },
                {
                    copy:'False',
                    color:'#2e88a7',
                    percent:'6%',
                    correct:false
                },
                {
                    copy:'Don\'t know',
                    color:'#a4a7a9',
                    percent:'1%',
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