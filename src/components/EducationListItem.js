import React, { Component } from 'react';
import IconComponent from './IconComponent';
import RemoveExperienceItem from './RemoveExperienceItem';

class EducationListItem extends Component {
  render () {
    return (
      <div className='experienceListItem'>
        <div>
          <h3><IconComponent id='Education' />{this.props.item.degree} in {this.props.item.major}</h3>
          <h4>{this.props.item.schoolName}</h4>
          <em>{this.props.item.from_date} - {this.props.item.to_date}</em>
          <p>GPA: {this.props.item.gpa}</p>
        </div>
        <RemoveExperienceItem item={this.props.item} removeItem={this.props.removeItem} />
      </div>
    );
  }
}

export default EducationListItem;