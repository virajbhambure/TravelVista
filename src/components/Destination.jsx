
import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"
import "./DestinationStyles.css"
import"./DestinationData"
import DestinationData from "./DestinationData"
const Destination=()=>
{

    return(
        <div className="destination">
            <h1>
                Popular Destinations
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

         
           <DestinationData
           cName="first-dest"
           heading="Taal Volcano, Batangas"
           text="Taal Volcano in Batangas, Philippines, is a unique and active volcano situated on an island within a lake. Known for its picturesque beauty, it offers stunning views and scenic hikes. Despite its frequent eruptions, including a major one in 2020, it remains a popular tourist attraction."
           img1={mountain1}
           img2={mountain2}/>

           <DestinationData
           cName="first-dest-reverse"
           heading="Mount Daguldol, Batangas"
           text="Mount Daguldol, located in Batangas, Philippines, is a popular hiking destination known for its scenic coastal views, lush forests, and diverse wildlife. The trail offers a mix of gentle slopes and challenging sections, making it ideal for beginner to intermediate hikers. At the summit, stunning views of nearby beaches and mountains await."
           img1={mountain3}
           img2={mountain4}/>
        </div>

        
    )
}
export default Destination

