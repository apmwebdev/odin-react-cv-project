import React, { Component } from 'react';
import ExperienceList from './ExperienceList';
import WorkForm from './WorkForm';
import EducationForm from './EducationForm';
import ShowFormButton from './ShowFormButton';

class ExperienceSection extends Component {
  constructor (props) {
    super(props);
    // TODO: Change 'workList' to 'experienceList', then this and EducationForm can be nearly identical
    this.state = {
      formIsHidden: true,
      experienceList: [],
    }
  }
  
  // Note: Must use 'bind' before use
  hideFormHandler = function() {
    this.setState({
      formIsHidden: true,
    });
  }
  
  // Note: Must use 'bind' before use
  showForm = function() {
    this.setState({
      formIsHidden: false,
    });
  }
  
  addOrEdit = (item) => {
    const itemToEdit = this.state.experienceList.find((i) => i.key === item.key);
    if (itemToEdit) {
      this.setState((prevState) => {
        return {
          experienceList: prevState.experienceList.map((j) => {
            if (j.key === item.key) {
              return item;
            }
            return j;
          })
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          experienceList: [...prevState.experienceList, item]
        };
      });
    }
  }
  
  removeItem = (item) => {
    this.setState(prevState => {
      return {
        experienceList: prevState.experienceList.filter(i => i !== item)
      };
    });
  }
  
  getVariantHeading = () => {
    if (this.props.variant === 'work') {
      return 'Work Experience';
    } else if (this.props.variant === 'education') {
      return 'Education';
    }
  }
  
  getVariantForm = () => {
    const formProps = {
      formIsHidden: this.state.formIsHidden,
      hideFormHandler: this.hideFormHandler.bind(this),
      addOrEdit: this.addOrEdit
    }
    if (this.props.variant === 'work') {
      return (<WorkForm {...formProps} />);
    } else if (this.props.variant === 'education') {
      return (<EducationForm {...formProps} />);
    }
  }
  
  render () {
    const {formIsHidden, experienceList} = this.state;
    
    return (
      <div className='ExperienceSection'>
        <h2 className='sectionHeading'>{this.getVariantHeading()}</h2>
        <hr />
        <ExperienceList
          variant={this.props.variant}
          experienceList={experienceList}
          removeItem={this.removeItem}
          hideFormHandler={this.hideFormHandler}
          showForm={this.showForm}
          addOrEdit={this.addOrEdit}
        />
        <this.getVariantForm />
        <ShowFormButton formIsHidden={formIsHidden} showForm={this.showForm.bind(this)} />
      </div>
    );
  }
}

export default ExperienceSection;