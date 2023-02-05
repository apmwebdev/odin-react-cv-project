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
        <div className="BasicInfoRight">
          <div className="CityState">
            <BasicInfoField value="City" htmlTag="span" />,&nbsp;
            <BasicInfoField value="State" htmlTag="span" />
          </div>
          <BasicInfoField value="Email" htmlTag="p" />
          <BasicInfoField value="Phone" htmlTag="p" />
        </div>
      </div>
    );
  }
}

export default BasicInfo;