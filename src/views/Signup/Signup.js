import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import SignupsDisplay from '../../components/SignupsDisplay/SignupsDisplay';
import {LS_SIGNUP_DATA} from '../../constants/global';


class Signup extends Component {
    constructor(props){
      super(props);
      this.state = {
        signups:[],
        lsSignups:[],
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
    }
    
    render() {
      return (
        <div className="quiz-wrapper">
          <div className="signup-wrapper">
            <h1>Sign up</h1>
            <SignupForm signupSubmitHandler={this.handleSaveSignupData} />
          </div>
        </div>
      );
    }
  }
  
  export default Signup;
  