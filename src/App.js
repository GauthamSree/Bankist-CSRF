import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  const[user, setUser] = useState({});
  const [csrfToken, setCsrfToken] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const defaultRouting = () => {
    if (!signedIn) {
      return <Login setToken={setSignedIn} fetchUser={fetchUser} setCsrfToken={setCsrfToken} />
    } else {
      return <LandingPage user={user} setSignedIn={setSignedIn} setUser={setUser} csrfToken={csrfToken} /> 
    }
  }

  const fetchUser = () => {
    fetch('http://localhost:8001/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if (data) {
        console.log(data);
        setUser(data);
        setSignedIn(true);
      }
    });
  }

  useEffect(() => {
    fetchUser();
    }, []);

  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={ defaultRouting() }/>
        <Route path="/login" exact element={<Login setToken={setSignedIn} fetchUser={fetchUser} setCsrfToken={setCsrfToken} />}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
