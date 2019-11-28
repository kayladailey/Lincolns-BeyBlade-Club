// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
// import {incrementDad, decrementDad, blastDad} from '../actions';
// import {Card, Image, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';


// function Dad() {
//     const counterD = useSelector(state => state.counterDad)
//     const dispatch = useDispatch(); // Allows us to dispatch actions 

// return(
// <Card.Group>
// <Card >
// <Image src='https://samuraibuyer.com/content/product/4904810134503_338x338[1].jpg' wrapped ui={false} />
// <Card.Content>
//   <Card.Meta>Team: Blaster Blades</Card.Meta>
//   <Card.Description>
//     <Button onClick ={() => dispatch(incrementDad())} > +</Button>
//     <Button onClick ={() => dispatch(blastDad(5))} > BLAST!</Button>
//     <Button onClick ={() => dispatch(decrementDad())} > -</Button>
//   </Card.Description>
//   <h1>Dad   {counterD} </h1>
// </Card.Content>
// </Card>
// </Card.Group>
// )}

// export default Dad;