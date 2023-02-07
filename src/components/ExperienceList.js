import React, { Component } from 'react';
import WorkListItem from './WorkListItem';
import EducationListItem from './EducationListItem';

class ExperienceList extends Component {
  getList = () => {
    let list = <div className='experienceListItem'>Nothing to show</div>
    if (this.props.experienceList.length <= 0) {
      return list;
    }
    if (this.props.variant === 'work') {
      list = this.props.experienceList.map(item => {
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
      });
    } else if (this.props.variant === 'education') {
      list = this.props.experienceList.map(item => {
        return (
          <EducationListItem
            item={item}
            key={item.key}
            removeItem={this.props.removeItem}
            hideFormHandler={this.props.hideFormHandler}
            showForm={this.props.showForm}
            addOrEdit={this.props.addOrEdit}
          />
        );
      });
    } else {
      throw new Error ('Invalid variant');
    }
    return list;
  }
  
  render () {
    return (
      <div className="ExperienceList">
        {this.getList()}
      </div>
    );
  }
}

export default ExperienceList;