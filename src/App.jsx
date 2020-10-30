import React from 'react';
import './App.css';
import Home from './containers/Home/index'

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>      
//     </div>
    
//   );
// }

class App extends React.Component{
  render(){
    return(
      <div>
        <Home />
      </div>
    )
  }
}


export default App