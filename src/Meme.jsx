import memesData from './memesData'
import { useEffect, useState } from 'react'

const Meme = () => {
    // const [memeImage, setMemeImage] = useState(" ");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [meme])

    console.log(meme)

    function getRandomImages(){
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(randomNumber)
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: url
            }
        })
        console.log(url)
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                // [event.target.name]: event.target.value
                [name]: value
            }
        })
    }

    return (
        <main className='meme-container'>

            <div className="form">
                <div className="inputs">
                    <input type="text" 
                        placeholder='Top Text'
                        value={meme.topText}
                        name='topText'
                        onChange={handleChange}
                    />
                    <input type="text" 
                        placeholder='Bottom Text'
                        value={meme.bottomText}
                        name='bottomText'
                        onChange={handleChange}
                    />
                </div>
                <button className="form-btn" onClick={getRandomImages}> Get a new meme image 🖼️ </button>

            </div>    

            <div className="meme">
                <img 
                    src={meme.randomImage} 
                    className='meme-image'
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
 
export default Meme;