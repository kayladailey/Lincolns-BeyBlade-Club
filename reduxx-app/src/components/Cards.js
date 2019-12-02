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
   
        <Card>
        <Image src='https://i.pinimg.com/564x/9e/f3/e0/9ef3e0eb5b43ecf2a14c7c108820a940.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Meta>Team: Glitter Power</Card.Meta>
          <Card.Description>
            <Button basic color='black' onClick ={() => dispatch(incrementK())} > +</Button>
            <Button inverted color='red' onClick ={() => dispatch(blastK(5))} > BLAST!</Button>
            <Button basic color='black' onClick ={() => dispatch(decrementK())} > -</Button>
          </Card.Description>
          <h1> Kenzie {counter} </h1>
        </Card.Content>
        </Card>
     
      <Card>
      <Image src='https://i.ebayimg.com/images/g/wtwAAOSwE4Rbca1r/s-l300.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Meta>Team: Blaster Blades</Card.Meta>
        <Card.Description>
          <Button basic color='black' onClick ={() => dispatch(incrementL())} > +</Button>
          <Button inverted color='red' onClick ={() => dispatch(blastL(5))} > BLAST!</Button>
          <Button basic color='black' onClick ={() => dispatch(decrementL())} > -</Button>
        </Card.Description>
        <h1>Lincoln   {counterL} </h1>
      </Card.Content>
      </Card>
 

    <Card >
<Image src='https://images-na.ssl-images-amazon.com/images/I/71t2HvnLQEL._SX425_.jpg' wrapped ui={false} />
<Card.Content>
  <Card.Meta>Team: The Enforcers </Card.Meta>
  <Card.Description>
    <Button basic color='black' onClick ={() => dispatch(incrementMom())} > +</Button>
    <Button inverted color='red' onClick ={() => dispatch(blastMom(5))} > BLAST!</Button>
    <Button basic color='black' onClick ={() => dispatch(decrementMom())} > -</Button>
  </Card.Description>
  <h1>Mommy {counterMom} </h1>
</Card.Content>
</Card>

<Card>
<Image src='https://samuraibuyer.com/content/product/4904810134503_338x338[1].jpg' wrapped ui={false} />
<Card.Content>
  <Card.Meta>Team: Blaster Blades</Card.Meta>
  <Card.Description>
    <Button basic color='black' onClick ={() => dispatch(incrementDad())} > +</Button>
    <Button inverted color='red' onClick ={() => dispatch(blastDad(5))} > BLAST!</Button>
    <Button basic color='black' onClick ={() => dispatch(decrementDad())} > -</Button>
  </Card.Description>
  <h1>Dad   {counterD} </h1>
</Card.Content>
</Card>
</Card.Group>

)}

export default Cards;