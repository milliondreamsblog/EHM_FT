import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Pages/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import Layout from "./Layout.jsx";
import ProductPage from "./Pages/Products.jsx";
import ServicePage from "./Pages/Services.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AdminLoginModal from "../src/Components/Admin/AdminLoginModal.jsx";
import AdminRoute from "../src/Components/Admin/AdminRoute.jsx";
import BlogSection from "./Components/BlogsSection/BlogsSection.jsx";
import SingleBlogPage from "./Components/BlogsSection/SingleBlogPage.jsx";
import AuthorBlogsPage from "./Components/BlogsSection/AuthorBlogsPage.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offerings/products" element={<ProductPage />} />
          <Route path="/offerings/services" element={<ServicePage />} />
          <Route path="/resources/blogs" element={<BlogSection />} />
          <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
          <Route
            path="/blogs/author/:authorName"
            element={<AuthorBlogsPage />}
          />
          <Route path="*" element={<HomePage />} />
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
