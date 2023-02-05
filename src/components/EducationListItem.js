import React, { Component } from 'react';

class EducationListItem extends Component {
  render () {
    return (
      <div>
        {this.props.item.schoolName}
        {this.props.item.degree}
        {this.props.item.major}
        {this.props.item.gpa}
        {this.props.item.from_date}
        {this.props.item.to_date}
      </div>
    );
  }
}

export default EducationListItem;