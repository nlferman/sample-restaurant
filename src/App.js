import logo from './logo.svg';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
<<<<<<< HEAD
import Card from './Components/CommonCopmonents/Card';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Card myprops= {"test"} showDescription= {""}/>
=======
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
>>>>>>> 62ade4568a654fc7b470bd68031eeb4940c78fed
    </div>
  );
}

export default App;
