import React, { Component } from 'react';

class QuizResult extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0
        }
    }
    componentWillMount(){
        this.setState({index:this.props.index});
    }

    render(){
        var styles;
        var barstyle;
        var barlabelstyle;
        var isselected=false;
        if (this.props.selectedIndexes.indexOf(this.state.index) !== -1) { //is selected
            styles = {
                color:this.props.dataVo.color,
            }
            barstyle={
                width:this.props.dataVo.percent,
                backgroundColor:this.props.dataVo.color
            }
            barlabelstyle = {
                left:this.props.dataVo.percent,
                color:'#000'
            }
            isselected=true;
        } else { //is not selected
            barstyle={
                width:this.props.dataVo.percent
            }
            barlabelstyle = {left:this.props.dataVo.percent}
        }
        
        
        return(
            <li className="result">
                <div className={isselected ? "bar add-shadow" : "bar"} style={barstyle}></div><div style={barlabelstyle} className="bar-label">{this.props.dataVo.percent}</div> <div style={styles} className="result-label">{this.props.dataVo.copy}</div>
            </li>
        );
    }
}
export default QuizResult;