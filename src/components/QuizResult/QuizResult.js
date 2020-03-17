import React, { Component } from 'react';

class QuizResult extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0
        }
    }
    UNSAFE_componentWillMount(){
        this.setState({index:this.props.index});
    }

    render(){
        // var styles;
        // var barstyle;
        // var barlabelstyle;
        var isselected=false;
        var iscorrect=false;
        var classes = 'result';
        if (this.props.selectedIndexes.indexOf(this.state.index) !== -1) { //is selected
            // styles = {
            //     color:this.props.dataVo.color,
            // }
            // barstyle={
            //     width:this.props.dataVo.percent,
            //     backgroundColor:this.props.dataVo.color
            // }
            // barlabelstyle = {
            //     left:this.props.dataVo.percent,
            //     color:'#000'
            // }
            isselected=true;
            classes = classes.concat(' ', 'selected');
        } 
        // else { //is not selected
        //     barstyle={
        //         width:this.props.dataVo.percent
        //     }
        //     barlabelstyle = {left:this.props.dataVo.percent}
        // }
        
        if(this.props.dataVo.correct){
            iscorrect = true;
            classes = classes.concat(' ', 'correct');
        }
        
        return(
            <li className={classes}>
                <div className="result-label">{this.props.dataVo.copy}</div>
                <div className={iscorrect ? "result-correct show" : "result-correct hide"}>Best Answer</div>
            </li>
        );
    }
}
export default QuizResult;