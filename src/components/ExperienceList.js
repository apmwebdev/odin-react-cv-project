import React from 'react';
import WorkListItem from './WorkListItem';
import EducationListItem from './EducationListItem';

const ExperienceList = (props) => {
  const getList = () => {
    let list = <div className='experienceListItem'>Nothing to show</div>
    if (props.experienceList.length <= 0) {
      return list;
    }
    if (props.variant === 'work') {
      list = props.experienceList.map(item => {
        return (
          <WorkListItem
            item={item}
            key={item.key}
            removeItem={props.removeItem}
            addOrEdit={props.addOrEdit}
          />
        );
      });
    } else if (props.variant === 'education') {
      list = props.experienceList.map(item => {
        return (
          <EducationListItem
            item={item}
            key={item.key}
            removeItem={props.removeItem}
            addOrEdit={props.addOrEdit}
          />
        );
      });
    } else {
      throw new Error ('Invalid variant');
    }
    return list;
  }
  
  return (
    <div className="ExperienceList">
      {getList()}
    </div>
  );
}

export default ExperienceList;