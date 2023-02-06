import React, { Component } from 'react';
import EducationForm from './EducationForm';
import EducationList from './EducationList';
import ShowFormButton from './ShowFormButton';

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
            to_date: prevState.to_date,
          }
        ]
      };
    });
    this.resetFormFieldState();
  }
  
  removeItem = (item) => {
    this.setState(prevState => {
      return {
        educationList: prevState.educationList.filter(i => i !== item)
      };
    });
  }
  
  render () {
    const {formIsHidden, educationList} = this.state;
    
    return (
      <div className="EducationInfo">
        <h2 className='sectionHeading'>Education</h2>
        <hr/>
        <EducationList educationList={educationList} removeItem={this.removeItem} />
        <EducationForm
          formIsHidden={formIsHidden}
          hideForm={this.hideForm}
          inputChangeHandler={this.inputChangeHandler}
          formSubmitHandler={this.formSubmitHandler}
        />
        <ShowFormButton formIsHidden={formIsHidden} showForm={this.showForm} />
      </div>
    );
  }
}

export default EducationInfo;