import './App.css';
import HomePage from './Pages/HomePage.jsx';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
