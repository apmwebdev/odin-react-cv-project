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
            School name:
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
            Degree earned:
            <input
              type="text"
              name="degree"
              placeholder="Degree earned"
              onChange={this.props.inputChangeHandler}
            />
          </label>
          <label>
            Major/Concentration:
            <input
              type="text"
              name="major"
              placeholder="Major"
              onChange={this.props.inputChangeHandler}
            />
          </label>
          <label>
            GPA:
            <input type="text" name="gpa" placeholder="GPA" onChange={this.props.inputChangeHandler} />
          </label>
        </div>
        <div className="educationFormRow">
          <label>
            From:
            <input type="month" name="from_date" onChange={this.props.inputChangeHandler} />
          </label>
          <label>
            To:
            <input type="month" name="to_date" onChange={this.props.inputChangeHandler} />
          </label>
        </div>
        <div className="educationFormRow">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.props.hideForm}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EducationForm;