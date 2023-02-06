import React, { Component } from 'react';
import { Icon } from '@iconify-icon/react';

class IconComponent extends Component {
  getIconFromId = () => {
    const iconKey = this.props.id
    if (iconKey === 'Email') {
      return 'mdi:email';
    } else if (iconKey === 'Phone') {
      return 'mdi:phone';
    } else if (iconKey === 'City') {
      return 'mdi:map-marker';
    } else if (iconKey === 'GitHub') {
      return 'mdi:github';
    } else if (iconKey === 'LinkedIn') {
      return 'mdi:linkedin';
    } else if (iconKey === 'Twitter') {
      return 'mdi:twitter';
    } else if (iconKey === 'Website') {
      return 'mdi:web';
    } else if (iconKey === 'Work') {
      return 'mdi:briefcase';
    } else if (iconKey === 'Education') {
      return 'mdi:school';
    } else if (iconKey === 'Remove') {
      return 'mdi:close-circle';
    }
  }
  render () {
    if (this.getIconFromId()) {
      return (
        <Icon inline icon={this.getIconFromId()} className='iconifyIcon'/>
      );
    } else {
      return null;
    }
  }
}

export default IconComponent;