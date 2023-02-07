import React, { Component } from 'react';

class EducationForm extends Component {
  formClasses = () => {
    if (this.props.formIsHidden) {
      return 'experienceForm displayNone';
    }
    return 'experienceForm';
  }
  
  render () {
    // school name, title of study, date of study
    return (
      <form
        className={this.formClasses()}
        name='EducationForm'
        onSubmit={this.props.formSubmitHandler}
      >
        <div className="experienceFormRow">
          <label>
            School name:&nbsp;
            <input
              type="text"
              name="schoolName"
              placeholder="School name"
              onInput={this.props.inputChangeHandler}
            />
          </label>
        </div>
        <div className="experienceFormRow">
          <label>
            Degree earned:&nbsp;
            <input
              type="text"
              name="degree"
              placeholder="Degree earned"
              onInput={this.props.inputChangeHandler}
            />
          </label>
          <label>
            Major/Concentration: &nbsp;
            <input
              type="text"
              name="major"
              placeholder="Major"
              onInput={this.props.inputChangeHandler}
            />
          </label>
          <label>
            GPA: &nbsp;
            <input type="text" name="gpa" placeholder="GPA" onInput={this.props.inputChangeHandler} />
          </label>
        </div>
        <div className="experienceFormRow">
          <label>
            From: &nbsp;
            <input type="month" name="from_date" onInput={this.props.inputChangeHandler} />
          </label>
          <label>
            To: &nbsp;
            <input type="month" name="to_date" onInput={this.props.inputChangeHandler} />
          </label>
        </div>
        <div className="experienceFormRow">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.props.hideForm}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EducationForm;