import React, { Component } from 'react';
import { createHash } from 'crypto-browserify';

class Avatar extends Component {
  
  getGravatar = (email) => {
    if (email) {
      const hash = createHash('md5').update(email.trim().toLowerCase()).digest('hex');
      return (
        <img src={`https://www.gravatar.com/avatar/${hash}?d=robohash&s=200`} alt='gravatar'/>
      );
    } else {
      return 'Avatar';
    }
  }
  
  render () {
    return (
      <div className="Avatar">
        {this.getGravatar(this.props.email)}
      </div>
    );
  }
}

export default Avatar;