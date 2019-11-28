// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
// import {incrementMom, decrementMom, blastMom} from '../actions';
// import {Card, Image, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';


// function Mom() {
//     const counterMom = useSelector(state => state.counterMom)
//     const dispatch = useDispatch(); // Allows us to dispatch actions 

// return(
// <Card.Group>
// <Card className='card'>
// <Image src='https://images-na.ssl-images-amazon.com/images/I/71t2HvnLQEL._SX425_.jpg' wrapped ui={false} />
// <Card.Content>
//   <Card.Meta>Team: Blaster Blades</Card.Meta>
//   <Card.Description>
//     <Button onClick ={() => dispatch(incrementMom())} > +</Button>
//     <Button onClick ={() => dispatch(blastMom(5))} > BLAST!</Button>
//     <Button onClick ={() => dispatch(decrementMom())} > -</Button>
//   </Card.Description>
//   <h1>Mommy   {counterMom} </h1>
// </Card.Content>
// </Card>
// </Card.Group>
// )}

// export default Mom;