import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";

import About from "./Pages/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AdminLoginModal from "./Components/Admin/AdminLoginModal.jsx";
import AdminRoute from "./Components/Admin/AdminRoute.jsx";
import Layout from "./Layout.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<Projects/>}/>
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
