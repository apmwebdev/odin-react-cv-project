import React, { Component } from 'react';
import WorkListItem from './WorkListItem';
import uniqid from 'uniqid';

class WorkList extends Component {
  getList = () => {
    let list = <div className='experienceListItem'>No work experience to show</div>
    if (this.props.workList.length > 0) {
      list = this.props.workList.map(item => {
        return (
          <WorkListItem item={item} key={uniqid()} removeItem={this.props.removeItem} />
        );
      })
    }
    return list;
  }
  render () {
    return (
      <div className="WorkList">
        {this.getList()}
      </div>
    );
  }
}

export default WorkList;