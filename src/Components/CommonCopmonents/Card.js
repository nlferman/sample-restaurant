import '../../Bootstrap/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const cardDefault = 
{
  cardTitle: 'Breakfest'
};


/*
This is a quick copy line for instantly adding a card somewhere with example text.
<CardComponents cardTitle ="Lunch" cardText=" Some quick example text to build on the card title and make up the bulk of
the card's content." buttonText="Menu">

</CardComponents>*/

function CardComponenet(props) {
    return (
        <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>
             
             {props.cardText}
            
          </Card.Text>
          <Button variant="primary">{props.buttonText}</Button>
        </Card.Body>
      </Card>
    );
  }

  export default CardComponenet;

  