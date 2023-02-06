import React, { Component } from 'react';
import WorkList from './WorkList';
import WorkForm from './WorkForm';
import ShowFormButton from './ShowFormButton';

class WorkInfo extends Component {
  constructor (props) {
    super(props);
    // (company name, position title, main tasks of your jobs, date from and until)
    this.state = {
      formIsHidden: true,
      workList: [],
      companyName: null,
      position: null,
      responsibilities: null,
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
    document.forms.WorkForm.reset();
  }
  
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  resetFormFieldState = () => {
    this.setState({
      companyName: null,
      position: null,
      responsibilities: null,
      from_date: null,
      to_date: null,
    });
    document.forms.WorkForm.reset();
  }
  
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        workList: [...prevState.workList,
          {
            companyName: prevState.companyName,
            position: prevState.position,
            responsibilities: prevState.responsibilities,
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
        workList: prevState.workList.filter(i => i !== item)
      };
    });
  }
  
  render () {
    const {formIsHidden, workList} = this.state;
    return (
      <div className="WorkInfo">
        <h2 className='sectionHeading'>Work Experience</h2>
        <hr />
        <WorkList workList={workList} removeItem={this.removeItem} />
        <WorkForm
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

export default WorkInfo;