import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import aboutImg from "../assets/night.jpg"
import Footer from '../components/footer';
import AboutUs from '../components/AboutUs';
function About()
{
    return(
        <>
       <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={aboutImg}
          title="About"
          
         
          btnclass="show-About"
          />
          <AboutUs/>
          <Footer/>
        </>
    )
}
export default About;