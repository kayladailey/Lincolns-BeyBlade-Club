import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
import {incrementK,  decrementK,blastK} from '../actions';
import {Card, Image, Button, } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


function Kenzie() {
    const counter = useSelector(state => state.counter)  // Accessing state and pulling the state from the reducer and selecting what piece we want to pull. In this case the counter state (starts at 0)
    const dispatch = useDispatch();

    return(
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
                <h1>Kenzie  {counter}</h1>
            </Card.Content>
            </Card>
        </Card.Group>
    )}
export default Kenzie;