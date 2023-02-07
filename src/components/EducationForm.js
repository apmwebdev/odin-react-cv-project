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
          <label htmlFor='schoolName'>School name:</label>
          <input
            type="text"
            name="schoolName"
            placeholder="School name"
            onInput={this.props.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor='degree'>Degree earned:</label>
          <input
            type="text"
            name="degree"
            placeholder="Degree earned"
            onInput={this.props.inputChangeHandler}
          />
          <label htmlFor='major'>Major/Concentration:</label>
          <input
            type="text"
            name="major"
            placeholder="Major"
            onInput={this.props.inputChangeHandler}
          />
          <label htmlFor='gpa'>GPA:</label>
          <input
            type="text"
            name="gpa"
            placeholder="GPA"
            onInput={this.props.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor='from_date'>From:</label>
          <input type="month" name="from_date" onInput={this.props.inputChangeHandler} />
          <label htmlFor='to_date'>To:</label>
          <input type="month" name="to_date" onInput={this.props.inputChangeHandler} />
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