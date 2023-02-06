import React, { Component } from 'react';

class EducationListItem extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.item.degree} in {this.props.item.major}</h3>
        <h4>{this.props.item.schoolName}</h4>
        <em>{this.props.item.from_date} - {this.props.item.to_date}</em>
        <p>GPA: {this.props.item.gpa}</p>
      </div>
    );
  }
}

export default EducationListItem;