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
            canproceed:false,
            emailerror:false
        };
       // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKeyboardInputCancel = this.onKeyboardInputCancel.bind(this);
    }
    // handleChange(event) {
    //     let target = event.target;
    //     let value = (target.type === 'checkbox') ? target.checked : target.value;
    //     let prop = target.name;

    //     this.setState((prevState) => ({
    //         ...prevState, [prop]: value
    //     }));
    // }
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
            this.setState((prevState) => ({
                ...prevState, [this.state.activevar]: data
            }),this.checkRequiredFields);
        }
    }
    onKeyboardInputCancel(){
        this.setState({activevar:'none'});
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    checkRequiredFields(){
        if(this.state.firstname !== '' && this.state.lastname !== '' && this.state.email !== ''){
            if(this.validateEmail(this.state.email)){
                this.setState({emailerror:false,canproceed:true});
            }else{
                this.setState({
                    emailerror:true,canproceed:false
                });
            }
        }else{
            this.setState({
                canproceed:false
            });
        }
    }
    render(){
        return (
            <div className="signup-form-wrapper">
                <Keyboard 
                    value={this.state.firstname}
                    name='keyboard'
                    placeholder='First Name*'
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
                    placeholder='Last Name*'
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
                
                <Keyboard 
                    value={this.state.title}
                    name='keyboard'
                    placeholder='Title'
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
                    onClick={()=>{this.onKeyboardInputClick('title')}}
                    onChange={this.onKeyboardInputChanged}
                    onBlur={this.onKeyboardInputCancel}
                    ref={k => this.keyboard = k}
                    />

                <Keyboard 
                    value={this.state.email}
                    name='keyboard'
                    placeholder='Email*'
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
                    onClick={()=>{this.onKeyboardInputClick('email')}}
                    onChange={this.onKeyboardInputChanged}
                    onBlur={this.onKeyboardInputCancel}
                    ref={k => this.keyboard = k}
                    />
                <div className={this.state.emailerror ? "email-error" : "email-error hide"}>Please enter a valid email address.</div>
                <p className="note">* Required Fields</p>
                <p className="disclaimer">When providing us your e-mail address, this data will be stored on servers of Publicis.Sapient.com and might also be stored on servers outside the EEA. Your e-mail address will only be accessed by Sapient employees for the purpose of sending you the report "The Impact of Digital on Business Transformation". The report is also downloadable from our website www.publicis.sapient.com. Your data will be deleted after a period of 2 months. If you disagree with the way your personal data will be used, please send an e-mail to info.de@sapient.com.</p>
                <div className="button-wrapper">
                    <button type="submit" disabled={(this.state.canproceed ? false : 'disabled')} onClick={this.handleSubmit}>Submit <i className="fa fa-angle-right" /></button>
                    <Link to="/"><button className="secondary" type="button" >No Thanks</button></Link>
                </div>
                
            </div>
        );
    }
}

export default SignupForm;

// validate: function(keyboard, value, isClosing){
//     // test value for an email address
//     var test = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value);
//     // if the value is invalid, alert the user
//     if (!test && isClosing) {
//         keyboard.$preview.addClass('red-border');
//     }else{
//         keyboard.$preview.removeClass('red-border');
//     }
//     // return valid test (true or false)
//     return test;
//   }