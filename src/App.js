import logo from './logo.svg';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import CardComponents from './Components/CommonCopmonents/Card';
import CarouselHeader from './Components/CommonCopmonents/CarouselHeader';



function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>

      <CardComponents cardTitle ="Lunch" cardText=" Some quick example text to build on the card title and make up the bulk of
            the card's content." buttonText="Menu">

      </CardComponents>
      

      <CarouselHeader>

      </CarouselHeader>
    </div>
  );
}

export default App;
