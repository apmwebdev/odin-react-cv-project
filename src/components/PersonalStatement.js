import BasicInfoField from './BasicInfoField';

class PersonalStatement extends BasicInfoField {
  placeholderText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }
  
  render () {
    if (this.state.isEditing) {
      return (
        <div className="PersonalStatement">
          <textarea placeholder={this.placeholderText()}
                 value={this.state.text}
                 autoFocus={true}
                 onBlur={this.show}
                 onChange={this.update}
                 onKeyDown={this.showOnEnter}
          /></div>);
    } else {
      return (
        <div className="BasicInfoField">
          <p onClick={this.edit}>{(this.state.text === '') ? this.placeholderText() : this.state.text}</p>
        </div>
      );
    }
  }
}

export default PersonalStatement;