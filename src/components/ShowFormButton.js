import React from 'react';
import { Icon } from '@iconify-icon/react';

const ShowFormButton = (props) => {
  const buttonClasses = () => {
    if (props.formIsHidden) {
      return 'showFormButton';
    }
    return 'showFormButton displayNone';
  }
  
  const buttonText = () => {
    if (props.buttonVariant && props.buttonVariant === 'Edit') {
      return (
        <Icon
          inline
          icon='mdi:pencil-circle'
          className={`iconifyIcon iconButton ${buttonClasses()}`}
          onClick={props.showForm}
        />
      );
    } else {
      return (
        <button className={buttonClasses()} onClick={props.showForm}>+ Add</button>
      );
    }
  }
  
  return buttonText();
}

export default ShowFormButton;