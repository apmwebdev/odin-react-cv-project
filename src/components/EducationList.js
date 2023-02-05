import React, { Component } from 'react';
import EducationListItem from './EducationListItem';
import uniqid from 'uniqid';

class EducationList extends Component {
  getList = () => {
    let list = 'No education information to show';
    if (this.props.educationList.length > 0) {
      console.log('list');
      list = this.props.educationList.map( item => {
        return (
          <EducationListItem item={item} key={uniqid()} />
        );
      });
    }
    return list;
  }
  
  render () {
    return (
      <div className="EducationList">
        {this.getList()}
      </div>
    );
  }
}

export default EducationList;