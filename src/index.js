import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super();
  }
  render() { 
    return ( 
      <div>
        <h1>TODO List </h1>
        </div>
     );
  }
}
 
export default App;


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)