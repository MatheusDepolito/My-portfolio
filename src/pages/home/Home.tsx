import NavBar from "../../components/NavBar/NavBar"
import About from "../sections/About/About"
import Skills from "../sections/About/Skills"
import Footer from "../sections/Footer/Footer"
import Hero from "../sections/Hero/Hero"
import Projects from "../sections/Projects/Projects"

const Home = () => {


  return (
    <>
        <NavBar />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />

    </>
  )
}

export default Home
