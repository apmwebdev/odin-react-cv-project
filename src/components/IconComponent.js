import React, { Component } from 'react';
import { Icon } from '@iconify-icon/react';

const IconComponent = (props) => {
  const getIconFromId = () => {
    if (props.id === 'Email') {
      return 'mdi:email';
    } else if (props.id === 'Phone') {
      return 'mdi:phone';
    } else if (props.id === 'City') {
      return 'mdi:map-marker';
    } else if (props.id === 'GitHub') {
      return 'mdi:github';
    } else if (props.id === 'LinkedIn') {
      return 'mdi:linkedin';
    } else if (props.id === 'Twitter') {
      return 'mdi:twitter';
    } else if (props.id === 'Website') {
      return 'mdi:web';
    } else if (props.id === 'Work') {
      return 'mdi:briefcase';
    } else if (props.id === 'Education') {
      return 'mdi:school';
    }
  }
  
  if (getIconFromId()) {
    return (
      <Icon inline icon={getIconFromId()} className='iconifyIcon'/>
    );
  } else {
    return null;
  }
}

export default IconComponent;