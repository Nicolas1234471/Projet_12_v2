import About from '../../components/About/About.jsx';
import Projects from '../../components/Projects/Projects.jsx';
import Skills from '../../components/Skills/Skills.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import CareerPath from '../../components/CareerPath/CareerPath.jsx';

function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="mr-[50px] ml-[50px] xl:m-auto">
                <Hero />
                <About />
                <CareerPath />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
