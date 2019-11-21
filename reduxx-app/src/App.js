import React from 'react';
import {useSelector} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer


function App() {
  const counter = useSelector(state => state.counter); // Accessing state and pulling the state from the reducer and selecting what piece we want to pull. In this case the counter state (starts at 0) 
  const isLogged = useSelector (state => state.isLogged); // Pulling the 'isLogged' state from the logged reducer (starts false)


  return (
    <div className="App">
     <h1> BeyBlade Tournament! </h1>
     <h2> Counter {counter}</h2>
     <button>Add Point +1</button>

     {isLogged ? <h3>Valuable Info</h3> :''}
    </div>
  );
}

export default App;
