import React, { Component } from 'react';

class WorkListItem extends Component {
  render () {
    return (
      <div className='experienceListItem'>
        <h3>{this.props.item.position}</h3>
        <h4>{this.props.item.companyName}</h4>
        <em>{this.props.item.from_date} - {this.props.item.to_date}</em>
        <p>{this.props.item.responsibilities}</p>
      </div>
    );
  }
}

export default WorkListItem;