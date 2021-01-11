import logo from './logo.svg';
import './App.css';
import NavBar from './Components/CommonCopmonents/NavBar';
import Card from './Components/CommonCopmonents/Card';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Card myprops= {"test"} showDescription= {""}/>
    </div>
  );
}

export default App;
