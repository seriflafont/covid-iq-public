import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import SignupsDisplay from '../../components/SignupsDisplay/SignupsDisplay';
import {LS_SIGNUP_DATA} from '../../constants/global';
import './Admin.css';

class Admin extends Component {
    constructor(props){
      super(props);
      this.state = {
        signups:[],
        lsSignups:[],
      };
      this.handleSaveSignupData = this.handleSaveSignupData.bind(this);
      this.displaySignups = this.displaySignups.bind(this);
      this.downloadSignups = this.downloadSignups.bind(this);
      this.deleteSignupData = this.deleteSignupData.bind(this);
    }
    deleteSignupData(){
      localStorage.setItem(LS_SIGNUP_DATA,'');
      this.componentWillMount();
    }
    displaySignups(){
      let lsSignups = localStorage.getItem(LS_SIGNUP_DATA);
      if(lsSignups){
          let lsParseSignups = JSON.parse(lsSignups);
          this.setState({
            lsSignups:lsParseSignups
          });
      }
    }
    componentWillMount(){
      let lsSignups = localStorage.getItem(LS_SIGNUP_DATA);
      if(lsSignups){
          let lsParseSignups = JSON.parse(lsSignups);
          this.setState({
            signups:lsParseSignups,
            lsSignups:lsParseSignups
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
    exportCSVFile(headers, items, fileTitle) {
      if (headers) {
          items.unshift(headers);
      }
  
      // Convert Object to JSON
      var jsonObject = JSON.stringify(items);
  
      var csv = this.convertToCSV(jsonObject);
  
      var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
  
      var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
          navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
          var link = document.createElement("a");
          if (link.download !== undefined) { // feature detection
              // Browsers that support HTML5 download attribute
              var url = URL.createObjectURL(blob);
              link.setAttribute("href", url);
              link.setAttribute("download", exportedFilenmae);
              link.style.visibility = 'hidden';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          }
      }
    }
  
    convertToCSV(objArray) {
      var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
      var str = '';
  
      for (var i = 0; i < array.length; i++) {
          var line = '';
          for (var index in array[i]) {
              if (line !== '') line += ','
  
              line += array[i][index];
          }
  
          str += line + '\r\n';
      }
  
      return str;
    }
  
    downloadSignups(){
      var headers = {
          firstname: 'First Name',
          lastname:'Last Name',
          company: 'Company',
          title: 'Title',
          email: 'Email Address'
      };
    
      var fileTitle = 'signups'; 
  
      this.exportCSVFile(headers, [...this.state.signups], fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
    }
    render() {
      return (
        <div className="quiz-wrapper">
          <div className="signup-wrapper">
            <div className="admin-wrapper">
              <h1>Admin</h1>
              {/* <button onClick={this.displaySignups}>Display Signups</button> */}
              <SignupsDisplay signupList={this.state.lsSignups} />
              <button onClick={this.downloadSignups}>Download Signups</button>
              <button onClick={this.deleteSignupData}>Delete Signups</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Admin;
  