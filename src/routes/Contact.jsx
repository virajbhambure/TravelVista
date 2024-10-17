import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import aboutImg from "../assets/3.jpg"
import Footer from '../components/footer';
import ContactForm from '../components/ContactForm';
function Contact()
{
    return(
        <>
        <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={aboutImg}
          title="Contact"
          
         
          btnclass="show-About"
          />
          <ContactForm/>
          <Footer/>
        </>
    )
}
export default Contact;