import './App.css';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import HomePage from './components/HomePage';
import Tracking from './components/Tracking';
import Token from './components/Token';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
    <FirstPage />
    <Signup />
    <Signin />
    <HomePage />
    <Tracking />
    <Token />
    <Map />
    
    </div>
  );
}

export default App;
