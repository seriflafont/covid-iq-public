import React, {Component} from 'react';
import Keyboard from 'react-virtual-keyboard';

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            activevar:'none',
            firstname:'',
            lastname:'',
            company:'',
            title:'',
            email:'',
            input:'false',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKeyboardInputCancel = this.onKeyboardInputCancel.bind(this);
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
        this.props.signupSubmitHandler({
            'firstname':this.state.firstname,
            'lastname':this.state.lastname,
            'company':this.state.company,
            'title':this.state.title,
            'email':this.state.email
        });
    }

    onKeyboardInputClick($activevar){
        this.setState({activevar:$activevar});
    }
    onKeyboardInputChanged = (data) => {
        if(this.state.activevar !== 'none'){
            //this.setState({ [this.state.activevar]: data });
            this.setState((prevState) => ({
                ...prevState, [this.state.activevar]: data
            }));
        }
    }
    onKeyboardInputCancel(){
        this.setState({activevar:'none'});
    }
    
    render(){
        return (
            <div className="form-wrapper">
                <Keyboard 
                    value={this.state.firstname}
                    name='keyboard'
                    placeholder='First Name'
                    options={{
                        type:"input",
                        layout: "qwerty",
                        autoAccept:true,
                        alwaysOpen: false,
                        usePreview: false,
                        useWheel: false,
                        stickyShift: true,
                        appendLocally: true,
                        color: "light",
                        updateOnChange: true,
                        initialFocus: true,
                        display: {
                        "accept" : "Submit"
                        }
                    }}
                    onClick={()=>{this.onKeyboardInputClick('firstname')}}
                    onChange={this.onKeyboardInputChanged}
                    onBlur={this.onKeyboardInputCancel}
                    ref={k => this.keyboard = k}
                    />
                {/* <input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" placeholder="First Name" /> */}
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