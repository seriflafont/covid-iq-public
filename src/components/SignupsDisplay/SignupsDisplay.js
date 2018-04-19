import React, {Component} from 'react';

class SignupsDisplay extends Component {
    render(){
        return(
            <ul>
                {this.props.signupList.map(function(obj, index){
                    return <li key={index}>{obj.firstname}</li>;
                })}
            </ul>
        );
    }
}

export default SignupsDisplay;