import React, {useState} from 'react';
import BasicInfoField from './BasicInfoField'
import PersonalStatement from './PersonalStatement';
import Avatar from './Avatar';

const BasicInfo = () => {
  const [email, setEmail] = useState('');
  
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  }
  
  return (
    <div className="BasicInfo">
      <div className="basicInfoTop">
        <Avatar email={email} />
        <div className="basicInfoLeft">
          <div className="flex">
            <BasicInfoField value="First Name" displayElem="h1" id="FirstName"/>
            <BasicInfoField value="Last Name" displayElem="h1" id="LastName"/>
          </div>
          <BasicInfoField value="Occupation" displayElem="h3" id='Occupation'/>
          <PersonalStatement />
        </div>
      </div>
      <div className="contactInfo">
        <BasicInfoField
          value="Email"
          displayElem="p"
          inputType="email"
          id='Email'
          updateParentEmail={updateEmail}
        />
        <BasicInfoField value="Phone" displayElem="p" inputType="phone" id='Phone'/>
        <div className="CityState">
          <BasicInfoField value="City" displayElem="span" id='City'/>,&nbsp;
          <BasicInfoField value="State" displayElem="span" id='State'/>
        </div>
        <BasicInfoField value="GitHub" displayElem="p" inputType="url" id='GitHub'/>
        <BasicInfoField value="LinkedIn" displayElem="p" inputType="url" id='LinkedIn'/>
        <BasicInfoField value="Website" displayElem="p" inputType="url" id='Website'/>
      </div>
    </div>
  );
}

export default BasicInfo;