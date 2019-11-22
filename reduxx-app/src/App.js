import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
import {incrementL, incrementK, decrementL, decrementK,blastK,blastL} from './actions';
import {Card, Image, Button, } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const counter = useSelector(state => state.counter)
  const counterL = useSelector(state => state.counterL); // Accessing state and pulling the state from the reducer and selecting what piece we want to pull. In this case the counter state (starts at 0) 
  const isLogged = useSelector (state => state.isLogged); // Pulling the 'isLogged' state from the logged reducer (starts false)
  const dispatch = useDispatch(); // Allows us to dispatch actions 

  return (
    <div className="App">
     {/* <Image src=''/> */}
    <Card.Group className='card-container'>
     <Card>
       <Image src='https://i.pinimg.com/564x/56/5e/b4/565eb4918662c9ab7ce48fd04dbeae6a.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header></Card.Header>
        <Card.Meta>Team: Sparkle Blades</Card.Meta>
        <Card.Description>
          <Button onClick ={() => dispatch(incrementK())} > +</Button>
          <Button onClick ={() => dispatch(blastK(5))} > BLAST!</Button>
          <Button onClick ={() => dispatch(decrementK())} > -</Button>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h1>Kenzie {counter}</h1>
      </Card.Content>
    </Card>

<Card>
<Image src='https://i.ebayimg.com/images/g/P6kAAOSwL8pciuzH/s-l500.jpg' wrapped ui={false} />
<Card.Content>
  <Card.Header></Card.Header>
  <Card.Meta>Team: Blaster Blades</Card.Meta>
  <Card.Description>
    <Button onClick ={() => dispatch(incrementL())} > +</Button>
    <Button onClick ={() => dispatch(blastL(5))} > BLAST!</Button>
    <Button onClick ={() => dispatch(decrementL())} > -</Button>
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <h1>Lincoln{counterL}</h1>
</Card.Content>
</Card>
</Card.Group>

{isLogged ? <h3>Valuable Info</h3> :''}

</div>
  );
}

export default App;
