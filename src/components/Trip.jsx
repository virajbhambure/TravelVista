import"./TripStyle.css"
import "./TripData"
import TripData from "./TripData";
import trip1 from "../assets/5.jpg"
import trip2 from "../assets/8.jpg"
import trip3 from "../assets/6.jpg"


function Trip()
{
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, eos?</p>

            <div className="Trip-card">
            <TripData
            image={trip1}
            heading="Trip in Indonasia"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque, eaque suscipit delectus aperiam rerum quam rem iusto laboriosam quae!" />
            <TripData
            image={trip2}
            heading="Trip in Andaman"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque, eaque suscipit delectus aperiam rerum quam rem iusto laboriosam quae!" />
            <TripData
            image={trip3}
            heading="Trip in London"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque, eaque suscipit delectus aperiam rerum quam rem iusto laboriosam quae!" />

            </div>
        </div>
       
    )
}
export default Trip;

