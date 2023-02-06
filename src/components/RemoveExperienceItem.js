import React, { Component } from 'react';
import IconComponent from './IconComponent';
import { Icon } from '@iconify-icon/react';

class RemoveExperienceItem extends Component {
  render () {
    return (
      <div>
        <Icon
          inline
          icon='mdi:close-circle'
          className='iconifyIcon closeIcon'
          onClick={() => this.props.removeItem(this.props.item)}
        />
      </div>
    );
  }
}

export default RemoveExperienceItem;