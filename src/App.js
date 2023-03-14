import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';

import ClassEvent from './ClassEvent';
// import FunctionEvent from './FunctionEvent';
class App extends Component {
  render() {
    return (
      <div>
          <ClassEvent />
          {/* <FunctionEvent /> */}
          <Child />
          <Child2 />
      </div>
    );
  }
}

export default App;