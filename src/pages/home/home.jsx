import About from "../../components/About/About.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

function Home () {
  return (
    <div className="min-h-screen">
        <Navbar />
        <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}

export default Home;