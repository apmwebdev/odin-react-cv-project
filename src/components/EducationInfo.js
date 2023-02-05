import React, { Component } from 'react';
import EducationForm from './EducationForm';
import EducationList from './EducationList';
import EducationShowFormButton from './EducationShowFormButton';

class EducationInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      formIsHidden: true,
      educationList: [],
      schoolName: null,
      degree: null,
      major: null,
      gpa: null,
      from_date: null,
      to_date: null,
    }
    // this.showForm = this.showForm.bind(this);
    // this.hideForm = this.hideForm.bind(this);
    // this.inputChangeHandler = this.inputChangeHandler.bind(this);
    // this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }
  
  showForm = () => {
    this.setState({
      formIsHidden: false,
    });
  }
  
  hideForm = () => {
    this.setState({
      formIsHidden: true,
    });
    document.forms.EducationForm.reset();
  }
  
  inputChangeHandler = (e) => {
    console.log('input change');
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  resetFormFieldState = () => {
    this.setState({
      schoolName: null,
      degree: null,
      major: null,
      gpa: null,
      from_date: null,
      to_date: null
    });
    document.forms.EducationForm.reset();
  }
  
  formSubmitHandler = (e) => {
    console.log('form submit');
    e.preventDefault();
    this.setState(prevState => {
      return {
        educationList: [...prevState.educationList,
          {
            schoolName: prevState.schoolName,
            degree: prevState.degree,
            major: prevState.major,
            gpa: prevState.gpa,
            from_date: prevState.from_date,
            to_date: prevState.to_date
          }
        ]
      };
    });
    this.resetFormFieldState();
  }
  
  render () {
    const {formIsHidden, educationList, formFields} = this.state;
    
    return (
      <div className="EducationInfo">
        <EducationList educationList={educationList} />
        <EducationForm
          formIsHidden={formIsHidden}
          hideForm={this.hideForm}
          formFields={formFields}
          inputChangeHandler={this.inputChangeHandler}
          formSubmitHandler={this.formSubmitHandler}
        />
        <EducationShowFormButton formIsHidden={formIsHidden} showForm={this.showForm} />
      </div>
    );
  }
}

export default EducationInfo;