import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';
import SayHi from './SayHi';

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
          <SayHi sayHi={bool => bool ? "Hi" : "By"} />
      </div>
    );
  }
}

export default App;