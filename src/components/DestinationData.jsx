import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"
import "./DestinationStyles.css"
import { Component } from "react"
class DestinationData extends Component
{
    render(){
           return(
            <div className={this.props.cName}>
            <div className="dest-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
                </div>
            <div className="image">
                <img src={this.props.img1} alt="img" />
                <img src={this.props.img2} alt="img" />
            </div>
        
           </div>
           )
    }
}

export default DestinationData;