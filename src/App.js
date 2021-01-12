import {useEffect, useState} from 'react';
import {MainPage} from './Template/MainPage.js';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import CardComponents from './Components/CommonCopmonents/Card';
import CarouselHeader from './Components/CommonCopmonents/CarouselHeader';

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
        {mainPage === undefined ? null : 
          <div alignItems={'center'}>
          <NavBar/>


          <CardComponents cardTitle ="Lunch" cardText=" Some quick example text to build on the card title and make up the bulk of
            the card's content." buttonText="Menu">

          </CardComponents>
      

         <CarouselHeader>

          </CarouselHeader>
        <CarouselHeader carouselData={mainPage} />
        </div>
        }
    </div>
  );
}

export default App;
