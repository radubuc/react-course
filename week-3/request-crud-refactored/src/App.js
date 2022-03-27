import React, {Component} from 'react'; //Deconstructing the import, so we can get component below
import {HousesList} from './components/HousesList';

class App extends Component { //Don't have to call React.Component
  render() {
    return (
      <div>
        <HousesList props={{test: data}} /> 
      </div>
    ) //We will make component late. Props will be data
  }
}
