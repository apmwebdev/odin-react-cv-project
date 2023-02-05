import React, { Component } from 'react';

class EducationForm extends Component {
  formClasses = () => {
    if (this.props.formIsHidden) {
      return 'EducationForm displayNone';
    }
    return 'EducationForm';
  }
  
  render () {
    // school name, title of study, date of study
    return (
      <form
        className={this.formClasses()}
        name="EducationForm"
        onSubmit={this.props.formSubmitHandler}
      >
        <div className="educationFormRow">
          <label>
            School name:&nbsp;
            <input
              type="text"
              name="schoolName"
              placeholder="School name"
              onChange={this.props.inputChangeHandler}
            />
          </label>
        </div>
        <div className="educationFormRow">
          <label>
            Degree earned:&nbsp;
            <input
              type="text"
              name="degree"
              placeholder="Degree earned"
              onChange={this.props.inputChangeHandler}
            />
          </label>
          &nbsp;
          <label>
            Major/Concentration: &nbsp;
            <input
              type="text"
              name="major"
              placeholder="Major"
              onChange={this.props.inputChangeHandler}
            />
          </label>
          &nbsp;
          <label>
            GPA: &nbsp;
            <input type="text" name="gpa" placeholder="GPA" onChange={this.props.inputChangeHandler} />
          </label>
        </div>
        <div className="educationFormRow">
          <label>
            From: &nbsp;
            <input type="month" name="from_date" onChange={this.props.inputChangeHandler} />
          </label>
          &nbsp;
          <label>
            To: &nbsp;
            <input type="month" name="to_date" onChange={this.props.inputChangeHandler} />
          </label>
        </div>
        <div className="educationFormRow">
          <button type="submit">Submit</button>&nbsp;
          <button type="button" onClick={this.props.hideForm}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EducationForm;