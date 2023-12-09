import meme from '/Troll Face.png'

const Header = () => {
    return (
        <div className="header">
                <img className='header-logo' src={meme} alt="" />
                <h1>Meme Generator</h1>
            <div className="right-sec">
                made by Kevin
            </div>
        </div>
    );
}
 
export default Header;