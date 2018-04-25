import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';
import {LS_SIGNUP_DATA} from '../../constants/global';

class Signup extends Component {
    constructor(props){
      super(props);
      this.state = {
        signups:[],
        lsSignups:[],
        signupsaved:false
      };
      this.handleSaveSignupData = this.handleSaveSignupData.bind(this);
    }
    
    componentWillMount(){
      let lsSignups = localStorage.getItem(LS_SIGNUP_DATA);
      if(lsSignups){
          let lsParseSignups = JSON.parse(lsSignups);
          this.setState({
            signups:lsParseSignups
          });
      }
    }
    componentWillUnmount(){
        localStorage.setItem(LS_SIGNUP_DATA,JSON.stringify(this.state.signups));
    }
  
    handleSaveSignupData(formObj){    
      this.setState((prevState) => ({
          signups: prevState.signups.concat([formObj])
      }), this.saveSignups);
    }
    saveSignups(){
      this.componentWillUnmount();
      this.setState({signupsaved:true});
    }
    showSignupForm(){
      return (
        <div className="signup-wrapper">
          <h1>Sign up</h1>
          <SignupForm signupSubmitHandler={this.handleSaveSignupData} />
        </div>
      );
    }
    showThankyouMessage(){
      return (
        <div className="signup-wrapper">
          <h1>Thank you</h1>
          <p className="text-center">Your information has been submitted.<br />
          <Link to="/"><button className="finish-button" type="button" >Finish <i className="fa fa-angle-right" /></button></Link>
          </p>
          
        </div>
      );
    }
    render() {
      let content;
      if(!this.state.signupsaved){
        content = this.showSignupForm();
      }else{
        content = this.showThankyouMessage();
      }
      return (
        <div className="quiz-wrapper">
          {content}
        </div>
      );
    }
  }
  
  export default Signup;
  