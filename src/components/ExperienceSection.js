import React, { useState } from 'react';
import ExperienceList from './ExperienceList';
import WorkForm from './WorkForm';
import EducationForm from './EducationForm';
import ShowFormButton from './ShowFormButton';

const ExperienceSection = (props) => {
  const [formIsHidden, setFormIsHidden] = useState(true);
  const [experienceList, setExperienceList] = useState([]);
  
  const hideForm = () => {
    setFormIsHidden(true);
  }
  
  const showForm = () => {
    setFormIsHidden(false);
  }
  
  const addOrEdit = (item) => {
    const itemToEdit = experienceList.find((i) => i.key === item.key);
    if (itemToEdit) {
      setExperienceList((prevState) => {
        return (
          prevState.map((j) => {
            if (j.key === item.key) {
              return item;
            }
            return j;
          })
        );
      });
    } else {
      setExperienceList((prevState) => [...prevState, item]);
    }
  }
  
  const removeItem = (item) => {
    setExperienceList((prevState) => prevState.filter(i => i !== item));
  }
  
  const getVariantHeading = () => {
    if (props.variant === 'work') {
      return 'Work Experience';
    } else if (props.variant === 'education') {
      return 'Education';
    }
  }
  
  const GetVariantForm = () => {
    const formProps = {
      formIsHidden: formIsHidden,
      hideForm: hideForm,
      addOrEdit: addOrEdit
    }
    if (props.variant === 'work') {
      return (<WorkForm {...formProps} />);
    } else if (props.variant === 'education') {
      return (<EducationForm {...formProps} />);
    }
  }
  
  return (
    <div className='ExperienceSection'>
      <h2 className='sectionHeading'>{getVariantHeading()}</h2>
      <hr />
      <ExperienceList
        variant={props.variant}
        experienceList={experienceList}
        removeItem={removeItem}
        hideForm={hideForm}
        showForm={showForm}
        addOrEdit={addOrEdit}
      />
      <GetVariantForm />
      <ShowFormButton formIsHidden={formIsHidden} showForm={showForm} />
    </div>
  );
}

export default ExperienceSection;