import React, { Component } from 'react';
import EducationListItem from './EducationListItem';
import uniqid from 'uniqid';

class EducationList extends Component {
  getList = () => {
    let list = <div className='experienceListItem'>No education information to show</div>
    if (this.props.educationList.length > 0) {
      list = this.props.educationList.map( item => {
        return (
          <EducationListItem item={item} key={uniqid()} removeItem={this.props.removeItem} />
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