import React, { Component } from 'react';

class QuizQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover:false,
            selected:false,
            index:0
        }
        this.selectItem = this.selectItem.bind(this);
    }
    componentWillMount(){
        this.setState({index:this.props.index});
    }
    selectItem(){
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
                color:this.props.dataVo.color,
                backgroundColor:'#fff'
            }
        }
        
        return(
            <li onClick={this.selectItem} style={styles}>
                {this.props.dataVo.copy}
            </li>
        );
    }
}
export default QuizQuestion;