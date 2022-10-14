import world from "../img/world-icon.png"
const Header = () => {
    return ( 
        <div className="header">
            <img src={world} alt="world" className="icon-header" />
            <p className="title-header">my travel journal.</p>
        </div>
     );
}
 
export default Header;