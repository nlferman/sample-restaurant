import {useEffect, useState} from 'react';
import {MainPage} from './Template/MainPage.js';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import CardComponents from './Components/CommonCopmonents/Card';
import CarouselHeader from './Components/CommonCopmonents/CarouselHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SASS/SASSMaster.css';

function App() {
  const [mainPage, setMainPage] = useState();

  useEffect(() => {
    console.log("Something!");
    console.log("Main Page:", MainPage);
    const mainPageData = MainPage;
    setMainPage(mainPageData);
  }, []);

  return (
    <div className="App">

        <Container fluid className="p-0">
          <Row>
              {/*Title of website and logo on left side* Do note the full header will be locked in place and alway on the page.*/}
            <Col>
              <NavBar/>  {/*The navbar and header will need to be seperate so I can put it inside the footer and header.*/}
            </Col>
          </Row>
          <Row>
            <Col>
              
            </Col>
          </Row>
          <Row className="justify-content-around ml-5"> {/*The below is for the menu cards*/ }
            <Col>
              <CardComponents cardTitle ="Lunch" cardText=" Some quick example text to build on the card title and make up the bulk of
              the card's content." buttonText="Menu"></CardComponents>
            </Col>
            <Col>
              <CardComponents cardTitle ="Lunch" cardText=" Some quick example text to build on the card title and make up the bulk of
              the card's content." buttonText="Menu"></CardComponents>
            </Col>
            <Col>
              <CardComponents cardTitle ="Lunch" cardText=" Some quick example text to build on the card title and make up the bulk of
              the card's content." buttonText="Menu"></CardComponents>
            </Col>
          </Row>

          <Row>
            <Col>
              {/* We will have some info or delight text here.*/}
              <h3> Come try some of our luch specials. They change everyday to keep the flavor fresh and new.</h3>
              <h1></h1>
              <p></p>
              <a>{/* Here we will have a link to contact info*/}</a>
            </Col>
          </Row>

          <Row>
            <Col>
              {/* This will be the footer This will have links to Facebook,twitter, iunstagram. Than the navbar. Below the footer have a made by Jonathan Westfall and Goeteeks*/}
            </Col>
          </Row>


        </Container>
      
        
    </div>
  );
}

export default App;
