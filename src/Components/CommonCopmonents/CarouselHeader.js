import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {pancakes} from '../../Images/Images';

const CarouselHeader = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item className="container-fluid" >
                <img
                className="d-block w-100"
                src={pancakes}
                alt="Breakfast"
                
                />
                <Carousel.Caption>
                <h3>Breakfast</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="container-fluid" >
                <img
                className="d-block w-100"
                src={'../../Images/club_sandwich.png'}
                alt="Lunch"
                
                />
                <Carousel.Caption>
                <h3>Lunch</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="container-fluid" >
                <img
                className="d-block w-100"
                src={'../../Images/steak.png'}
                alt="Dinner"
                
                />
                <Carousel.Caption>
                <h3>Dinner</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }

  export default CarouselHeader