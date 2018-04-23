import React, {Component} from 'react';
import './SignupsDisplay.css';

class SignupsDisplay extends Component {
    render(){
        return(
            <table className="signups-display-wrapper">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Email Address</th>
                    </tr>
                    {this.props.signupList.map(function(obj, index){
                        return (
                            <tr key={index}>
                                <td>{obj.firstname}</td>
                                <td>{obj.lastname}</td>
                                <td>{obj.company}</td>
                                <td>{obj.title}</td>
                                <td>{obj.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default SignupsDisplay;