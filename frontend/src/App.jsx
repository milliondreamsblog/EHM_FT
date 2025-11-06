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
import ScrollToHashElement from './Components/Animations/ScrollToHashElement.jsx';


import ProductPage from "./Pages/Products.jsx";
import ServicePage from "./Pages/Services.jsx";
// V-- CHANGE MADE HERE --V //
// We are now importing the new ProjectsPage component.
import ProjectsPage from "./Pages/ProjectsPage.jsx";
// ^-- CHANGE MADE HERE --^ //


import "aos/dist/aos.css";
import AdminLoginModal from "../src/Components/Admin/AdminLoginModal.jsx";


import ScrollToTop from './Components/LandingPage/ScrollToTop.jsx';
import GalleryPage from './Pages/GalleryPage.jsx';

import AuthorContentPage from './Common/Content/AuthorContentPage.jsx';
import SingleContentPage from './Common/Content/SingleContentPage.jsx';
import BlogsPage from './Pages/BlogsPage.jsx';
import CaseStudyPage from './Pages/CaseStudyPage.jsx';

import WebinarPage from './Pages/WebinarPage.jsx';
import WebinarDetails from './Components/Webinar/WebinarDetails.jsx';
import WaterbodyRestoration from './Pages/WaterbodyRestoration.jsx';
import SustainabilityAssessment from './Pages/SustainabilityAssessment&Reporting.jsx';
import GeophysicalInvestigation from './Pages/GeophysicalInvestigation.jsx';




function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
    <ScrollToHashElement />
      <Layout>
        <ScrollToTop />
        <Routes>

          {/* Public Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* V-- CHANGE MADE HERE --V */}
          {/* This route now renders our new, detailed ProjectsPage component. */}
          <Route path="/projects" element={<ProjectsPage />} />
          {/* ^-- CHANGE MADE HERE --^ */}

          <Route path="/offerings/products" element={<ProductPage />} />

          <Route path="/offerings" element={<ServicePage />} />
          <Route path="resources/gallery" element={<GalleryPage />} />
          <Route path="/resources/webinar" element={<WebinarPage />} />
          <Route path="/resources/webinar/:id" element={<WebinarDetails />} />

          <Route path="/resources/blogs" element={<BlogsPage />} />
          <Route path="/resources/casestudies" element={<CaseStudyPage />} />
          <Route path="/resources/WaterbodyRestoration" element={<WaterbodyRestoration />} />
          <Route path="/offerings/sustainability-assessment-reporting" element={<SustainabilityAssessment />} />
          <Route path="/offerings/geophysical-investigation" element={<GeophysicalInvestigation />} />

          <Route
            path="/blogs/:id"
            element={<SingleContentPage basePath="blogs" contentName="Blog" />}
          />

          <Route
            path="/casestudies/:id"
            element={<SingleContentPage basePath="casestudies" contentName="Case Study" />}
          />
          <Route
            path="/blogs/author/:authorName"
            element={<AuthorContentPage basePath="blogs" contentNamePlural="Blogs" />}
          />

          <Route
            path="/casestudies/author/:authorName"
            element={<AuthorContentPage basePath="casestudies" contentNamePlural="Case Studies" />}
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

