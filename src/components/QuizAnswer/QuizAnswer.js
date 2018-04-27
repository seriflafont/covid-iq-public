import React, { Component } from 'react';

class QuizAnswer extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover:false,
            selected:false,
            index:0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
        this.setState({index:this.props.index});
    }
    handleClick(){
        this.props.handleSelect(this.state.index);
    }
    
    render(){
        var styles;
        if (this.props.selectedIndexes.indexOf(this.state.index) !== -1) {
            styles = {
                backgroundColor:this.props.dataVo.color,
                color:'#fff'
            }
        } else {
            styles = {
               // color:this.props.dataVo.color,
                color:'#3b95b1',
                backgroundColor:'#fff'
            }
        }
        
        return(
            <li onClick={this.handleClick} style={styles}>
                <span className="answer-label">{this.props.dataVo.copy}</span>
            </li>
        );
    }
}
export default QuizAnswer;