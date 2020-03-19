import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question06 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            showresults:false,
            canproceed:false,
            question:'If you have other people living in your home, do they...',
            answers:[
                {
                    copy:'Go to work',
                    color:'#9dd5e2',
                    points:'3',
                    correct:false
                },
                {
                    copy:'Go to school',
                    color:'#7bc3d5',
                    points:'3',
                    correct:false
                },
                {
                    copy:'Go out to socialize',
                    color:'#60b2c8',
                    points:'0',
                    correct:false
                },
                {
                    copy:'Stay in, mostly',
                    color:'#4ba3bc',
                    points:'5',
                    correct:true
                },
                {
                    copy:'No one else lives with me.',
                    color:'#4ba3bc',
                    points:'5',
                    correct:true
                }
            ],
            message:'The Whitehouse guidelines for preventing the spread of COVID-19 strongly recommend staying home as much as possible.',
            sourceurl:'https://www.whitehouse.gov/wp-content/uploads/2020/03/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf',
            source:'Whitehouse.gov',
            questionpanelnumber:6,
            nextpanel:'07',
            selected:[]
        };
    }
}

export default Question06;