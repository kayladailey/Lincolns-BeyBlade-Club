import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
import {incrementL, incrementK, decrementL, decrementK,blastK,blastL} from './actions';
import {Card, Image, Button} from 'semantic-ui-react';

function App() {
  const counter = useSelector(state => state.counter)
  const counterL = useSelector(state => state.counterL); // Accessing state and pulling the state from the reducer and selecting what piece we want to pull. In this case the counter state (starts at 0) 
  const isLogged = useSelector (state => state.isLogged); // Pulling the 'isLogged' state from the logged reducer (starts false)
  const dispatch = useDispatch(); // Allows us to dispatch actions 

  return (
    <div className="App">
     <h1> BeyBlade Tournament! </h1>
    
    
     <Card>
      <Image src='' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Kenzie{counter}</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
     <Button onClick ={() => dispatch(incrementK())} > +</Button>
     <Button onClick ={() => dispatch(blastK(5))} > BLAST</Button>
     <Button onClick ={() => dispatch(decrementK())} > -</Button>
        </a>
      </Card.Content>
    </Card>
     {/* <h2> Kenzie {counter}</h2>
     <button onClick ={() => dispatch(incrementK())} > +</button>
     <button onClick ={() => dispatch(blastK(5))} > BLAST</button>
     <button onClick ={() => dispatch(decrementK())} > -</button> */}

     <h2> Lincoln {counterL}</h2>
     <button onClick ={() => dispatch(incrementL())} > +</button>
     <button onClick ={() => dispatch(blastL(5))} > BLAST</button>
     <button onClick ={() => dispatch(decrementL())} > -</button>
     {isLogged ? <h3>Valuable Info</h3> :''}
    </div>
  );
}

export default App;
