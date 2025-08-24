
import { useEffect } from 'react';
import './App.css'
import Footer from './Components/Footer/Footer.jsx';
import About from './Pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AdminRoute from './Components/Admin/AdminRoute.jsx';
import AOS from 'aos';
import ContactPage from './Pages/ContactPage.jsx';
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Layout from "./Layout.jsx";


import ProductPage from "./Pages/Products.jsx";
import ServicePage from "./Pages/Services.jsx";
import ArticlesPage from "./Pages/ArticlesPage.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Projects from "./Pages/Projects.jsx";
import AdminLoginModal from "./Components/Admin/AdminLoginModal.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Public Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/offerings/products" element={<ProductPage />} />
          <Route path="/offerings/services" element={<ServicePage />} />
          <Route path="/products" element={<ProductsPage />} />


          <Route path="/projects" element={<Projects/>}/>

          <Route path="*" element={<HomePage />} />

          {/* Admin Pages */}
          <Route path="/admin/login" element={<AdminLoginModal />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );

}

export default App;