// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
// import {incrementK,  decrementK, blastK} from '../actions';
// import {Card, Image, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';


// function Kenzie() {
//     const counter = useSelector(state => state.counter)
//     const dispatch = useDispatch();

//     return(
//         <Card.Group>
//         <Card className='card'>
//         <Image src='https://i.pinimg.com/564x/9e/f3/e0/9ef3e0eb5b43ecf2a14c7c108820a940.jpg' wrapped ui={false} />
//         <Card.Content>
//           <Card.Meta>Team: Blaster Blades</Card.Meta>
//           <Card.Description>
//             <Button onClick ={() => dispatch(incrementK())} > +</Button>
//             <Button onClick ={() => dispatch(blastK(5))} > BLAST!</Button>
//             <Button onClick ={() => dispatch(decrementK())} > -</Button>
//           </Card.Description>
//           <h1> Kenzie {counter} </h1>
//         </Card.Content>
//         </Card>
//         </Card.Group>
//     )}
// export default Kenzie;