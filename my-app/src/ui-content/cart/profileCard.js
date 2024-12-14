
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import car from '../assessts/images/car2.jpg'
export function Product(props){
  console.log(props)
    return(
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} style={{height:"200px"}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price} 
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">{props.price}</Button></Card.Footer>
    </Card>
    </div>
         );
        }
        
    
