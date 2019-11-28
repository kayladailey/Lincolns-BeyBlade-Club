import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
import {incrementDad, decrementDad, blastDad,incrementK, 
        incrementMom, decrementMom, blastMom,
        incrementL, decrementL, blastL,decrementK, blastK} from '../actions';
import {Card, Image, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';





function Cards () {
    const counter = useSelector(state => state.counter)
    const counterD = useSelector(state => state.counterDad)
    const counterL = useSelector(state => state.counterL)
    const counterMom = useSelector(state => state.counterMom)
    const dispatch = useDispatch();

return (
  <Card.Group className='card-container'>
      <div className='top-card'>
        <Card>
        <Image src='https://i.pinimg.com/564x/9e/f3/e0/9ef3e0eb5b43ecf2a14c7c108820a940.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Meta>Team: Glitter Power</Card.Meta>
          <Card.Description>
            <Button onClick ={() => dispatch(incrementK())} > +</Button>
            <Button onClick ={() => dispatch(blastK(5))} > BLAST!</Button>
            <Button onClick ={() => dispatch(decrementK())} > -</Button>
          </Card.Description>
          <h1> Kenzie {counter} </h1>
        </Card.Content>
        </Card>
     
      <Card>
      <Image src='https://i.ebayimg.com/images/g/wtwAAOSwE4Rbca1r/s-l300.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Meta>Team: Blaster Blades</Card.Meta>
        <Card.Description>
          <Button onClick ={() => dispatch(incrementL())} > +</Button>
          <Button onClick ={() => dispatch(blastL(5))} > BLAST!</Button>
          <Button onClick ={() => dispatch(decrementL())} > -</Button>
        </Card.Description>
        <h1>Lincoln   {counterL} </h1>
      </Card.Content>
      </Card>
    </div>
</Card.Group>

)}

export default Cards;