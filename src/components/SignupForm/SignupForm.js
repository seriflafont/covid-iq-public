import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Keyboard from 'react-virtual-keyboard';
import './SignupForm.css';

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
            <div className="signup-form-wrapper">
                <Keyboard 
                    value={this.state.firstname}
                    name='keyboard'
                    placeholder='First Name'
                    type="text"
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
                <Keyboard 
                    value={this.state.lastname}
                    name='keyboard'
                    placeholder='Last Name'
                    type="text"
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
                    onClick={()=>{this.onKeyboardInputClick('lastname')}}
                    onChange={this.onKeyboardInputChanged}
                    onBlur={this.onKeyboardInputCancel}
                    ref={k => this.keyboard = k}
                    />
                <Keyboard 
                    value={this.state.company}
                    name='keyboard'
                    placeholder='Company'
                    type="text"
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
                    onClick={()=>{this.onKeyboardInputClick('company')}}
                    onChange={this.onKeyboardInputChanged}
                    onBlur={this.onKeyboardInputCancel}
                    ref={k => this.keyboard = k}
                    />
                {/* <input type="text" onChange={this.handleChange} name="company" placeholder="Company" /> */}
                <input type="text" onChange={this.handleChange} name="title" placeholder="Title" />
                <input type="text" onChange={this.handleChange} name="email" placeholder="Email" />
                <p className="note">* Required Fields</p>
                <p className="disclaimer">When providing us your e-mail address, this data will be stored on servers of Publicis.Sapient.com and might also be stored on servers outside the EEA. Your e-mail address will only be accessed by Sapient employees for the purpose of sending you the report "The Impact of Digital on Business Transformation". The report is also downloadable from our website www.publicis.sapient.com. Your data will be deleted after a period of 2 months. If you disagree with the way your personal data will be used, please send an e-mail to info.de@sapient.com.</p>
                <div className="button-wrapper">
                    <button type="submit" onClick={this.handleSubmit}>Submit <i className="fa fa-angle-right" /></button>
                    <Link to="/"><button className="secondary" type="button" >No Thanks</button></Link>
                </div>
                
            </div>
        );
    }
}

export default SignupForm;