import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    initialState: undefined,
  }

  fetchingApi = async() => {
     await fetch('http://localhost:5000')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="App">
        <button onClick={this.fetchingApi}>Fetch</button>
        

        <form action="http://localhost:5000/people" method="post">
          <label htmlFor="name">Name: </label>
          <input type="text" name="nameTest" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
