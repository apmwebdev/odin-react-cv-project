import React, { Component } from 'react';
import WorkList from './WorkList';
import WorkForm from './WorkForm';
import ShowFormButton from './ShowFormButton';
import uniqid from 'uniqid';

class WorkInfo extends Component {
  constructor (props) {
    super(props);
    // (company name, position title, main tasks of your jobs, date from and until)
    // TODO: Change 'workList' to 'list', then this and EducationForm can be nearly identical
    this.state = {
      formIsHidden: true,
      workList: [],
      // companyName: null,
      // position: null,
      // responsibilities: null,
      // from_date: null,
      // to_date: null,
    }
  }
  
  hideFormHandler = function() {
    this.setState({
      formIsHidden: true,
    });
  }
  
  showForm = function() {
    this.setState({
      formIsHidden: false,
    });
  }
  
  // resetFormFieldState = () => {
  //   this.setState({
  //     companyName: null,
  //     position: null,
  //     responsibilities: null,
  //     from_date: null,
  //     to_date: null,
  //   });
  //   document.forms.WorkForm.reset();
  // }
  
  addOrEdit = (item) => {
    const itemToEdit = this.state.workList.find((i) => i.key === item.key);
    if (itemToEdit) {
      this.setState((prevState) => {
        return {
          workList: prevState.workList.map((j) => {
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
          workList: [...prevState.workList, item]
        };
      });
    }
  }
  
  removeItem = (item) => {
    this.setState(prevState => {
      return {
        workList: prevState.workList.filter(i => i !== item)
      };
    });
  }
  
  render () {
    const {formIsHidden, workList} = this.state;
    return (
      <div className="WorkInfo">
        <h2 className='sectionHeading'>Work Experience</h2>
        <hr />
        <WorkList
          workList={workList}
          removeItem={this.removeItem}
          hideFormHandler={this.hideFormHandler}
          showForm={this.showForm}
          addOrEdit={this.addOrEdit}
        />
        <WorkForm
          formIsHidden={formIsHidden}
          hideFormHandler={this.hideFormHandler.bind(this)}
          addOrEdit={this.addOrEdit}
        />
        <ShowFormButton formIsHidden={formIsHidden} showForm={this.showForm.bind(this)} />
      </div>
    );
  }
}

export default WorkInfo;