import React, { Component } from 'react';
import Child from './Child';

import ClassEvent from './ClassEvent';
// import FunctionEvent from './FunctionEvent';
class App extends Component {
  render() {
    return (
      <div>
          <ClassEvent />
          {/* <FunctionEvent /> */}
          <Child />
      </div>
    );
  }
}

export default App;