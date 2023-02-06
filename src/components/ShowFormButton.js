import React, { Component } from 'react';

class EducationShowFormButton extends Component {
  buttonClasses = () => {
    if (this.props.formIsHidden) {
      return 'showFormButton';
    }
    return 'showFormButton displayNone';
  }
  
  render () {
    return (
      <button className={this.buttonClasses()} onClick={this.props.showForm}>+ Add</button>
    );
  }
}

export default EducationShowFormButton;