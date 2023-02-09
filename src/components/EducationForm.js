import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      key: this.props.item ? this.props.item.key : uniqid(),
      formId: `WorkForm${uniqid()}`,
      degree: this.props.item?.degree,
      major: this.props.item?.major,
      schoolName: this.props.item?.schoolName,
      from_date: this.props.item?.from_date,
      to_date: this.props.item?.to_date,
      gpa: this.props.item?.gpa,
    }
  }
  
  formClasses = () => {
    if (this.props.formIsHidden) {
      return 'experienceForm displayNone';
    }
    return 'experienceForm';
  }
  
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  createItem = () => {
    return {
      key: this.state.key,
      degree: this.state.degree,
      major: this.state.major,
      schoolName: this.state.schoolName,
      gpa: this.state.gpa,
      from_date: this.state.from_date,
      to_date: this.state.to_date,
    };
  }
  
  resetToInitial = () => {
    for (const element of document.forms[this.state.formId].elements) {
      element.value = this.props.item ? this.props.item[element.name] : '';
      this.inputChangeHandler({target: {
          name: element.name, value: element.value
        }});
    }
    if (!this.props.item) {
      this.setState({key: uniqid()});
    }
  }
  
  hideForm = () => {
    this.props.hideForm();
    this.resetToInitial();
  }
  
  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addOrEdit(this.createItem());
    if (this.props.item) {
      this.props.hideForm();
    } else {
      this.resetToInitial();
    }
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
          <label htmlFor='from_date'>From:</label>
          <input
            type="month"
            name="from_date"
            defaultValue={this.props.item?.from_date}
            onInput={this.inputChangeHandler} />
          <label htmlFor='to_date'>To:</label>
          <input
            type="month"
            name="to_date"
            defaultValue={this.props.item?.to_date}
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