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
                
                <input type="text" onChange={this.handleChange} name="firstname" placeholder="First" />
                <br />
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                
            </div>
        );
    }
}

export default SignupForm;