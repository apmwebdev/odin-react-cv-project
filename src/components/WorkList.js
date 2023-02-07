import React, { Component } from 'react';
import WorkListItem from './WorkListItem';

class WorkList extends Component {
  getList = () => {
    let list = <div className='experienceListItem'>No work experience to show</div>
    if (this.props.workList.length > 0) {
      list = this.props.workList.map(item => {
        return (
          <WorkListItem
            item={item}
            key={item.key}
            removeItem={this.props.removeItem}
            hideFormHandler={this.props.hideFormHandler}
            showForm={this.props.showForm}
            addOrEdit={this.props.addOrEdit}
          />
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