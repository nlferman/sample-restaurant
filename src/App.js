import logo from './logo.svg';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import CarouselHeader from './Components/CommonCopmonents/CarouselHeader';
function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <CarouselHeader />
      </div>
    </div>
  );
}

export default App;
