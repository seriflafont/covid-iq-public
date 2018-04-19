import React, {Component} from 'react';

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let target = event.target;
        let value = (target.type === 'checkbox') ? target.checked : target.value;
        let prop = target.name;

        //let prop = event.target.getAttribute('name');
        this.setState((prevState) => ({
            ...prevState, [prop]: value
        }));
    }
    handleSubmit(){
        this.props.signupSubmitHandler(this.state);
    }
    render(){
        return (
            <div className="form-wrapper">
                
                <input type="text" onChange={this.handleChange} name="firstname" placeholder="First Name" />
                <br />
                <input type="text" onChange={this.handleChange} name="lastname" placeholder="Last Name" />
                <input type="text" onChange={this.handleChange} name="company" placeholder="Company" />
                <input type="text" onChange={this.handleChange} name="title" placeholder="Title" />
                <input type="text" onChange={this.handleChange} name="email" placeholder="Email" />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                
            </div>
        );
    }
}

export default SignupForm;