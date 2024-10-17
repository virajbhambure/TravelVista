import Destination from '../components/Destination';
import Footer from '../components/footer';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip';
function Home()
{
    return(
        <>
        <Navbar/>
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Your Journey Your Story"
          text="Choose your favorite journey"
          btntext="Travel Plan"
          url="/"
          btnclass="show"
          />
          <Destination/>
          <Trip/>
          <Footer/>
        </>
    )
}
export default Home;