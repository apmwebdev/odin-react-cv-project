import React from 'react';
import { createHash } from 'crypto-browserify';

const Avatar = (props) => {
  
  const getGravatar = (email) => {
    if (email) {
      const hash = createHash('md5').update(email.trim().toLowerCase()).digest('hex');
      return (
        <img src={`https://www.gravatar.com/avatar/${hash}?d=robohash&s=200`} alt='gravatar'/>
      );
    } else {
      return 'Avatar';
    }
  }
  
  return (
    <div className="Avatar">
      {getGravatar(props.email)}
    </div>
  );
}

export default Avatar;