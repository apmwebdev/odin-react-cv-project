import React, { Component } from 'react';

class BasicInfoField extends Component {
  constructor (props) {
    // Expecting 'value' and 'htmlTag' in props
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
        <input type="text"
               className={`BasicInfoField ${this.props.htmlTag}`}
               placeholder={this.props.value}
               value={this.state.text}
               autoFocus={true}
               onBlur={this.show}
               onChange={this.update}
               onKeyDown={this.showOnEnter}
        />);
    } else {
      return (
        <this.props.htmlTag
          className="BasicInfoField"
          onClick={this.edit}>{
          (this.state.text === '') ? this.props.value : this.state.text
        }</this.props.htmlTag>
      );
    }
  }
}

export default BasicInfoField;