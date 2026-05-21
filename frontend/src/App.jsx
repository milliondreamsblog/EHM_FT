import { useEffect, Suspense, lazy } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout.jsx";
import AOS from 'aos';
import "aos/dist/aos.css";
import ScrollToHashElement from './Components/Animations/ScrollToHashElement.jsx';
import ScrollToTop from './Components/LandingPage/ScrollToTop.jsx';
import AdminRoute from "../src/Components/Admin/AdminRoute.jsx";
import InteractiveLoader from './Components/Common/InteractiveLoader.jsx';

// Lazy load pages
const HomePage = lazy(() => import('./Pages/HomePage.jsx'));
const About = lazy(() => import('./Pages/About.jsx'));
const ContactPage = lazy(() => import('./Pages/ContactPage.jsx'));
const ProjectsPage = lazy(() => import('./Pages/ProjectsPage.jsx'));
const ProductPage = lazy(() => import('./Pages/Products.jsx'));
const ServicePage = lazy(() => import('./Pages/Services.jsx'));
const GalleryPage = lazy(() => import('./Pages/GalleryPage.jsx'));
const WebinarPage = lazy(() => import('./Pages/WebinarPage.jsx'));
const WebinarDetails = lazy(() => import('./Components/Webinar/WebinarDetails.jsx'));
const BlogsPage = lazy(() => import('./Pages/BlogsPage.jsx'));
const CaseStudyPage = lazy(() => import('./Pages/CaseStudyPage.jsx'));
const WaterbodyRestoration = lazy(() => import('./Pages/WaterbodyRestoration.jsx'));
const SustainabilityAssessment = lazy(() => import('./Pages/SustainabilityAssessment&Reporting.jsx'));
const GeophysicalInvestigation = lazy(() => import('./Pages/GeophysicalInvestigation.jsx'));
const AuthorContentPage = lazy(() => import('./Common/Content/AuthorContentPage.jsx'));
const SingleContentPage = lazy(() => import('./Common/Content/SingleContentPage.jsx'));
const AdminLoginModal = lazy(() => import('../src/Components/Admin/AdminLoginModal.jsx'));
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard.jsx"));
const StarcContactPage = lazy(() => import('./Pages/StarcContactPage.jsx'));
const DNTSPage = lazy(() => import('./Pages/DNTS.jsx'));



function App() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Layout>
        <ScrollToTop />
        <Suspense fallback={<InteractiveLoader />}>
          <Routes>

            {/* Public Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/starc" element={<StarcContactPage />} />


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
            <Route path="/resources/dnts" element={<DNTSPage />} />
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  );

}

export default App;
