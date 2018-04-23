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
        this.setState({selected: !this.state.selected});
        if(this.state.selected){
            this.props.handleSelect(this.state.index);
        }else{
            this.props.handleDeselect(this.state.index);
        }
    }

    render(){
        var styles;
        if (this.state.selected) {
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