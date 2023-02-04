import React, { Component } from 'react';
import BasicInfoField from './BasicInfoField'

class BasicInfo extends Component {
  // constructor (props) { super(props); }
  
  render() {
    return (
      <div className="BasicInfo">
        <div className="flex">
          <BasicInfoField value="First Name" htmlTag="h2" />
          <BasicInfoField value="Last Name" htmlTag="h2" />
        </div>
        <div>
          <BasicInfoField value="Address line 1" htmlTag="p" />
          <BasicInfoField value="Address line 2" htmlTag="p" />
          <div className="flex">
            <BasicInfoField value="City" htmlTag="p" />
            <BasicInfoField value="State" htmlTag="p" />
            <BasicInfoField value="Zip" htmlTag="p" />
          </div>
          <BasicInfoField value="Email" htmlTag="p" />
          <BasicInfoField value="Phone" htmlTag="p" />
        </div>
      </div>
    );
  }
}

export default BasicInfo;