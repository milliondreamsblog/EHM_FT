
import './App.css'
import Footer from './Components/Footer/Footer.jsx';

import About from './Pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import NavBar from './Components/Header/NavBar.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
  <BrowserRouter>
       <Layout>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<HomePage/>} /> 
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
     </Routes>
     </Layout>
    </BrowserRouter>
  );

}

export default App;
