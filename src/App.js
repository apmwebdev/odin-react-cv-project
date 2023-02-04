import React, { Component } from 'react';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import WorkInfo from './components/WorkInfo';
import EducationInfo from './components/EducationInfo';

class App extends Component {
  // constructor (props) { super(props); }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <BasicInfo />
          <WorkInfo />
          <EducationInfo />
        </main>
      </div>
    );
  }
}

export default App;
