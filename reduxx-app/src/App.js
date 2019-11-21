import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
import {incrementL, incrementK} from './actions';


function App() {
  const counter = useSelector(state => state.counter)
  const counterL = useSelector(state => state.counterL); // Accessing state and pulling the state from the reducer and selecting what piece we want to pull. In this case the counter state (starts at 0) 
  const isLogged = useSelector (state => state.isLogged); // Pulling the 'isLogged' state from the logged reducer (starts false)
  const dispatch = useDispatch(); // Allows us to dispatch actions 

  return (
    <div className="App">
     <h1> BeyBlade Tournament! </h1>
     <h2> Kenzie {counter}</h2>
     <button onClick ={() => dispatch(incrementK())} > +</button>

     <h2> Lincoln {counterL}</h2>
     <button onClick ={() => dispatch(incrementL())} > +</button>
     {isLogged ? <h3>Valuable Info</h3> :''}
    </div>
  );
}

export default App;
