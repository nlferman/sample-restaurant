import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import Card from './Components/CommonCopmonents/Card';
import CarouselHeader from './Components/CommonCopmonents/CarouselHeader';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Card myprops= {"test"} showDescription= {""}/>
      <CarouselHeader />
    </div>
  );
}

export default App;
