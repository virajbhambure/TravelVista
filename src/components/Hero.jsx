import "./HeroStyles.css";
function Hero(props)
{
    return(
        <>
        <div className={props.cName}>
            <img src={props.heroImg} alt="Heroimg" />
        </div>
        <div className="Herotext">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnclass}>{props.btntext}</a>
        </div>
        
        </>
    )
}
export default Hero;