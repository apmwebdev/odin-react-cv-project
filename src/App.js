import React, { Component } from 'react';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import ExperienceSection from './components/ExperienceSection';
import EducationInfo from './components/EducationInfo';

class App extends Component {
  // constructor (props) { super(props); }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <BasicInfo />
          <ExperienceSection variant='education' />
          <ExperienceSection variant='work' />
        </main>
      </div>
    );
  }
}

export default App;
