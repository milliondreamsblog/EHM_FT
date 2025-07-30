import NavBar from "../Components/Header/NavBar";
import HeroSection from "../Components/LandingPage/HeroSection";
import FootPrint from "../Components/LandingPage/FootPrint";
import Footer from "../Components/Footer/Footer";
import Testimonials from "../Components/LandingPage/Testimonials";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e6ffe6] via-[#ccffcc] to-[#b3ffb3]">
            <NavBar />
            <main>
                <HeroSection />
                <Testimonials/>
                <FootPrint />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;