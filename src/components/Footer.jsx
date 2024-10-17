import "./Footer.css"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>TravelVista</h1>
                    <p>Choose your favorite destination </p>
                </div>
                <div>
                    <a href="/">
                     <i className="fa-brands fa-facebook-square"></i>
                     <i className="fa-brands fa-instagram-square"></i>
                     <i className="fa-brands fa-twitter-square"></i>
                     <i className="fa-brands fa-whatsapp-square"></i>
                     
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Pojects</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                    
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Term and services</a>
                    <a href="/">Privecy Policy</a>
                    <a href="/">Licence</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;