import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import aboutImg from "../assets/2.jpg"
import Footer from '../components/footer';
import Trip from '../components/Trip';
function Service()
{
    return(
        <>
        <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={aboutImg}
          title="Service"
          
         
          btnclass="show-About"
          />
          <Trip/>
          <Footer/>
        </>
    )
}
export default Service;