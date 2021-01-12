import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import breakfast from '../../../public/Images/panckaes.png';
// import lunch from '../../../public/Images/club_sandwich.png';
// import dinner from '../../Images/steak.png';

const CarouselHeader = (props) => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    console.log(props);
    const {carouselOptions} = props.carouselData;

    const makeCarousel = carouselItems => {
        const carousel = [];
        carouselItems.forEach((carouselItem) => {
            carousel.push
            (
                <Carousel.Item className={carouselItem.classNameItem} width={"400px"} interval={carouselItem.interval}>
                    <img
                    className="d-block w-100"
                    src={carouselItem.image.default}
                    alt={carouselItem.altText}
                    width={"40px"}
                    height={"300px"}
                    style={{objectFit:'contain'}}
                    />
                    <Carousel.Caption className={carouselItem.classNameCaption}>
                    <h3>{carouselItem.title}</h3>
                    <p>{carouselItem.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        });
        return carousel;
    }
    
    return (
        <Carousel
            className={carouselOptions.className}
            activeIndex={index}
            onSelect={handleSelect}
            style={{width: 400}}
            controls={carouselOptions.showControls}
            indicators={carouselOptions.showIndicators}
            interval={carouselOptions.defaultInterval === null ? 5000 : carouselOptions.defaultInterval}
            fade={carouselOptions.fade}
            keyboard={carouselOptions.keybgoard}
            pause={carouselOptions.pause === 'hover' ? 'hover' : false}
            nextLabel={carouselOptions.nextLabel === '' || carouselOptions.nextLabel === undefined ? 'Next' : carouselOptions.nextLabel}
            prevLabel={carouselOptions.prevLabel === '' || carouselOptions.prevLabel === undefined ? 'Previous' : carouselOptions.prevLabel}
            slide={carouselOptions.slide}
            touch={carouselOptions.touch}
            wrap={carouselOptions.wrap}
             >
            {makeCarousel(props.carouselData.carouselItems)}
        </Carousel>
    );
  }

  export default CarouselHeader