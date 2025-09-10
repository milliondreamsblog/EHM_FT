
import { useEffect } from 'react';
import './App.css'
import About from './Pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AdminRoute from "../src/Components/Admin/AdminRoute.jsx";
import AOS from 'aos';
import ContactPage from './Pages/ContactPage.jsx';
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Layout from "./Layout.jsx";


import ProductPage from "./Pages/Products.jsx";
import ServicePage from "./Pages/Services.jsx";
import Projects from "./Pages/Projects.jsx";



import "aos/dist/aos.css";
import AdminLoginModal from "../src/Components/Admin/AdminLoginModal.jsx";

import BlogSection from "./Components/BlogsSection/BlogsSection.jsx";
import SingleBlogPage from "./Components/BlogsSection/SingleBlogPage.jsx";
import AuthorBlogsPage from "./Components/BlogsSection/AuthorBlogsPage.jsx";
import ScrollToTop from './Components/LandingPage/ScrollToTop.jsx';
import GalleryPage from './Pages/GalleryPage.jsx';



function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          {/* Public Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/offerings/products" element={<ProductPage />} />
          <Route path="/offerings" element={<ServicePage  />}  />
           <Route path="resources/gallery" element={<GalleryPage  />}  />
          <Route path="/resources/blogs" element={<BlogSection />} />
          <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
          <Route
            path="/blogs/author/:authorName"
            element={<AuthorBlogsPage />}
          />

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