import React, { Component } from 'react';
import uniqid from 'uniqid';

class FormComponent extends Component {
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
      <div>
      
      </div>
    );
  }
}

export default FormComponent;