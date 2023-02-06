import React, { Component } from 'react';

class WorkForm extends Component {
  formClasses = () => {
    if (this.props.formIsHidden) {
      return 'experienceForm displayNone';
    }
    return 'experienceForm';
  }
  
  render () {
    return (
      <form
        className={this.formClasses()}
        name='WorkForm'
        onSubmit={this.props.formSubmitHandler}
      >
        <div className="experienceFormRow">
          <label htmlFor="position">Position:</label>
          <input
            type='text'
            name='position'
            placeholder='Position'
            onChange={this.props.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor="companyName">Company:</label>
          <input
            type='text'
            name='companyName'
            placeholder='Company name'
            onChange={this.props.inputChangeHandler}
          />
        </div>
        <div className="experienceFormRow">
          <label htmlFor="from_date">From:</label>
          <input type="month" name="from_date" onChange={this.props.inputChangeHandler} />
          <label htmlFor="to_date">To:</label>
          <input type="month" name="to_date" onChange={this.props.inputChangeHandler} />
        </div>
        <div className="experienceFormRow">
          <label htmlFor="responsibilities">Responsibilities:</label>
        </div>
        <div className="experienceFormRow">
          <textarea
            name="responsibilities"
            cols="50"
            rows="6"
            onChange={this.props.inputChangeHandler}
          ></textarea>
        </div>
        <div className="experienceFormRow">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.props.hideForm}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default WorkForm;