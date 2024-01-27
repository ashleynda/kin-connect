import './App.css';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import HomePage from './components/HomePage';
import Tracking from './components/Tracking';
import Token from './components/Token';
import GoogleMap from './components/Map';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='signin' element={<Signin />}/>
          <Route path='homepage' element={<HomePage />}/>
          <Route path='tracking' element={<Tracking />}/>
          <Route path='token' element={<Token />}/>
          <Route path='map' element={<Map />}/>
        </Routes>
      </BrowserRouter> */}
    <FirstPage />
    <Signup />
    <Signin />
    <HomePage />
    <Tracking />
    <Token />
    {/* <GoogleMap/> */}
    
    </div>
  );
}

export default App;
