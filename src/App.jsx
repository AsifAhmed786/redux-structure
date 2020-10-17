import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {set_data} from './store/action'

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>      
//     </div>
    
//   );
// }

class App extends React.Component{
  render(){
    console.log("redux-data=>",this.props)
    return(
      <div>
      <h1>Hello World</h1>      
      <br/>
      <button onClick={this.props.set_data}>Set Data</button>
      </div>

    )
  }
}

const mapStateToProps = (state) =>({
  username: state.auth.username,
  email: state.auth.email,
  app_name: state.app.app_name
})

const mapDispatchToProp = (dispatch)=>({
  set_data: ()=>{
    dispatch(set_data())
    // console.log("Hello")
  }
})

export default connect(mapStateToProps,mapDispatchToProp)(App)
// export default App;
