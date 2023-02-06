import React, { Component } from 'react';
import IconComponent from './IconComponent';

class BasicInfoField extends Component {
  constructor (props) {
    // Expecting 'value', 'displayElem', 'id', and (optionally) 'inputType' in props
    super(props);
    this.state = {
      text: '',
      isEditing: false,
    };
  }
  
  show = () => {
    this.setState({
      isEditing: false,
    });
    if (this.props.updateParentEmail && this.state.text !== '') {
      this.props.updateParentEmail(this.state.text);
    }
  }
  
  edit = () => {
    this.setState({
      isEditing: true,
    });
  }
  
  update = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  
  showOnEnter = (e) => {
    if (e.keyCode === 13) {
      this.show();
    }
  }
  
  render () {
    if (this.state.isEditing) {
      return (
        <div className="BasicInfoField">
          <IconComponent id={this.props.id} />
          <input type={this.props.inputType ? this.props.inputType : 'text'}
                 className={`BasicInfoField ${this.props.displayElem} ${this.props.id}`}
                 placeholder={this.props.value}
                 value={this.state.text}
                 autoFocus={true}
                 onBlur={this.show}
                 onChange={this.update}
                 onKeyDown={this.showOnEnter}
          /></div>);
    } else {
      return (
        <div className="BasicInfoField">
          
          <this.props.displayElem
            className={`BasicInfoField ${this.props.id}`}
            onClick={this.edit}><IconComponent id={this.props.id} />{
            (this.state.text === '') ? this.props.value : this.state.text
          }</this.props.displayElem>
        </div>
      );
    }
  }
}

export default BasicInfoField;