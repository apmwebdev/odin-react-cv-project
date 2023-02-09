import React, { useState } from 'react';
import IconComponent from './IconComponent';
import RemoveExperienceItem from './RemoveExperienceItem';
import ShowFormButton from './ShowFormButton';
import WorkForm from './WorkForm';

const WorkListItem = (props) => {
  const [formIsHidden, setFormIsHidden] = useState(true);
  
  const showForm = () => {
    setFormIsHidden(false);
  }
  
  const hideForm = () => {
    setFormIsHidden(true);
  }
  
  if (formIsHidden) {
    return (
      <div className='experienceListItem'>
        <div>
          <h3><IconComponent id='Work'/>{props.item.position}</h3>
          <h4>{props.item.companyName}</h4>
          <em>{props.item.from_date} - {props.item.to_date}</em>
          <p>{props.item.responsibilities}</p>
        </div>
        <div>
          <RemoveExperienceItem item={props.item} removeItem={props.removeItem}/>
          <ShowFormButton
            formIsHidden={formIsHidden}
            buttonVariant='Edit'
            showForm={showForm}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className='experienceListItem'>
        <WorkForm
          item={props.item}
          formIsHidden={formIsHidden}
          hideForm={hideForm}
          addOrEdit={props.addOrEdit}
        />
        <RemoveExperienceItem item={props.item} removeItem={props.removeItem}/>
      </div>
    );
  }
}

export default WorkListItem;