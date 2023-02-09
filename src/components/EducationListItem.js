import React, { useState } from 'react';
import IconComponent from './IconComponent';
import RemoveExperienceItem from './RemoveExperienceItem';
import EducationForm from './EducationForm';
import ShowFormButton from './ShowFormButton';

const EducationListItem = (props) => {
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
          <h3><IconComponent id='Education'/>{props.item.degree} in {props.item.major}
          </h3>
          <h4>{props.item.schoolName}</h4>
          <em>{props.item.from_date} - {props.item.to_date}</em>
          <p>GPA: {props.item.gpa}</p>
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
        <EducationForm
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

export default EducationListItem;