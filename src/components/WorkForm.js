import React from 'react';
import uniqid from 'uniqid';
import FormComponent from './FormComponent';

class WorkForm extends FormComponent {
  constructor (props) {
    super(props);
    this.state = {
      key: this.props.item ? this.props.item.key : uniqid(),
      formId: `WorkForm${uniqid()}`,
      position: this.props.item ? this.props.item.position : null,
      companyName: this.props.item ? this.props.item.companyName : null,
      fromDate: this.props.item ? this.props.item.fromDate : null,
      toDate: this.props.item ? this.props.item.toDate : null,
      responsibilities: this.props.item ? this.props.item.responsibilities : null,
    }
  }
  
  createItem = () => {
    return {
      key: this.state.key,
      companyName: this.state.companyName,
      position: this.state.position,
      responsibilities: this.state.responsibilities,
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
          <label htmlFor="position">Position:</label>
          <input
            type='text'
            name='position'
            placeholder='Position'
            defaultValue={this.props.item ? this.props.item.position : ''}
            onInput={this.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor="companyName">Company:</label>
          <input
            type='text'
            name='companyName'
            placeholder='Company name'
            defaultValue={this.props.item ? this.props.item.companyName : ''}
            onInput={this.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor="fromDate">From:</label>
          <input
            type="month"
            name="fromDate"
            defaultValue={this.props.item ? this.props.item.fromDate : ''}
            onInput={this.inputChangeHandler} />
          <label htmlFor="toDate">To:</label>
          <input
            type="month"
            name="toDate"
            defaultValue={this.props.item ? this.props.item.toDate : ''}
            onInput={this.inputChangeHandler} />
        </div>
        <div className="experienceFormRow">
          <label htmlFor="responsibilities">Responsibilities:</label>
        </div>
        <div className="experienceFormRow">
          <textarea
            name="responsibilities"
            cols="50"
            rows="6"
            defaultValue={this.props.item ? this.props.item.responsibilities : ''}
            onInput={this.inputChangeHandler}
          ></textarea>
        </div>
        <div className="experienceFormRow">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.hideForm}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default WorkForm;