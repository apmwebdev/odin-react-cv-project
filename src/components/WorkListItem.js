import React, { Component } from 'react';
import IconComponent from './IconComponent';
import RemoveExperienceItem from './RemoveExperienceItem';

class WorkListItem extends Component {
  render () {
    return (
      <div className='experienceListItem'>
        <div>
          <h3><IconComponent id='Work' />{this.props.item.position}</h3>
          <h4>{this.props.item.companyName}</h4>
          <em>{this.props.item.from_date} - {this.props.item.to_date}</em>
          <p>{this.props.item.responsibilities}</p>
        </div>
        <RemoveExperienceItem item={this.props.item} removeItem={this.props.removeItem} />
      </div>
    );
  }
}

export default WorkListItem;