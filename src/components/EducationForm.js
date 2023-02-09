import React from 'react';
import uniqid from 'uniqid';
import FormComponent from './FormComponent';

class EducationForm extends FormComponent {
  constructor (props) {
    super(props);
    this.state = {
      key: this.props.item ? this.props.item.key : uniqid(),
      formId: `WorkForm${uniqid()}`,
      degree: this.props.item?.degree,
      major: this.props.item?.major,
      schoolName: this.props.item?.schoolName,
      fromDate: this.props.item?.fromDate,
      toDate: this.props.item?.toDate,
      gpa: this.props.item?.gpa,
    }
  }
  
  createItem = () => {
    return {
      key: this.state.key,
      degree: this.state.degree,
      major: this.state.major,
      schoolName: this.state.schoolName,
      gpa: this.state.gpa,
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
    };
  }
  
  render () {
    return (
      <form
        id={this.state.formId}
        className={this.formClasses()}
        name={this.state.formId}
        onSubmit={this.formSubmitHandler}
      >
        <div className="experienceFormRow">
          <label htmlFor='schoolName'>School name:</label>
          <input
            type="text"
            name="schoolName"
            placeholder="School name"
            defaultValue={this.props.item?.schoolName}
            onInput={this.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor='degree'>Degree earned:</label>
          <input
            type="text"
            name="degree"
            placeholder="Degree earned"
            defaultValue={this.props.item?.degree}
            onInput={this.inputChangeHandler}
          />
          <label htmlFor='major'>Major/Concentration:</label>
          <input
            type="text"
            name="major"
            placeholder="Major"
            defaultValue={this.props.item?.major}
            onInput={this.inputChangeHandler}
          />
          <label htmlFor='gpa'>GPA:</label>
          <input
            type="text"
            name="gpa"
            placeholder="GPA"
            defaultValue={this.props.item?.gpa}
            onInput={this.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor='fromDate'>From:</label>
          <input
            type="month"
            name="fromDate"
            defaultValue={this.props.item?.fromDate}
            onInput={this.inputChangeHandler} />
          <label htmlFor='toDate'>To:</label>
          <input
            type="month"
            name="toDate"
            defaultValue={this.props.item?.toDate}
            onInput={this.inputChangeHandler} />
        </div>
        <div className="experienceFormRow">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.hideForm}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EducationForm;