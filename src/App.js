import {useEffect, useState} from 'react';
import {MainPage} from './Template/MainPage.js';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import Card from './Components/CommonCopmonents/Card';
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
        <Card myprops= {"test"} showDescription= {""}/>
        <CarouselHeader carouselData={mainPage} />
        </div>
      }
    </div>
  );
}

export default App;
