import React, { Component } from 'react';
import { Icon } from '@iconify-icon/react';

class ShowFormButton extends Component {
  buttonClasses = () => {
    if (this.props.formIsHidden) {
      return 'showFormButton';
    }
    return 'showFormButton displayNone';
  }
  
  buttonText = () => {
    if (this.props.buttonVariant && this.props.buttonVariant === 'Edit') {
      return (
        <Icon
          inline
          icon='mdi:pencil-circle'
          className={`iconifyIcon iconButton ${this.buttonClasses()}`}
          onClick={this.props.showForm}
        />
      );
    } else {
      return (
        <button className={this.buttonClasses()} onClick={this.props.showForm}>+ Add</button>
      );
    }
  }
  
  render () {
    return this.buttonText();
  }
}

export default ShowFormButton;