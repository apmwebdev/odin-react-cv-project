import React, { Component } from 'react';
import IconComponent from './IconComponent';
import RemoveExperienceItem from './RemoveExperienceItem';
import ShowFormButton from './ShowFormButton';
import WorkForm from './WorkForm';

class WorkListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      formIsHidden: true,
      hideFormHandler: this.props.hideFormHandler.bind(this),
      showForm: this.props.showForm.bind(this),
    }
  }
  
  render () {
    if (this.state.formIsHidden) {
      return (
        <div className='experienceListItem'>
          <div>
            <h3><IconComponent id='Work'/>{this.props.item.position}</h3>
            <h4>{this.props.item.companyName}</h4>
            <em>{this.props.item.from_date} - {this.props.item.to_date}</em>
            <p>{this.props.item.responsibilities}</p>
          </div>
          <div>
            <RemoveExperienceItem item={this.props.item} removeItem={this.props.removeItem}/>
            <ShowFormButton
              formIsHidden={this.state.formIsHidden}
              buttonVariant='Edit'
              showForm={this.state.showForm}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className='experienceListItem'>
          <WorkForm
            item={this.props.item}
            formIsHidden={this.state.formIsHidden}
            hideFormHandler={this.state.hideFormHandler}
            addOrEdit={this.props.addOrEdit}
          />
          <RemoveExperienceItem item={this.props.item} removeItem={this.props.removeItem}/>
        </div>
      );
    }
  }
}

export default WorkListItem;